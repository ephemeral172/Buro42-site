import React, { useEffect, useRef, useSyncExternalStore } from 'react';
import { cn } from '@/lib/utils';
import { getTheme, subscribeTheme } from '@/theme';

const VANTA_BG = {
  dark: 0x19191c,
  light: 0xf4f5f6,
};

/**
 * TOPOLOGY один раз строит flow_field под размер canvas; встроенный resize()
 * делает только resizeCanvas — сетка и частицы остаются старыми → OOB в get_flow,
 * NaN/throw в draw(), и в p5 2.x цепочка requestAnimationFrame не возобновляется.
 */
function patchTopologyResize(instance) {
  let debounceTimer;
  let firstResize = true;
  let lastW = 0;
  let lastH = 0;

  const scheduleRestart = () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      try {
        instance.restart?.();
      } catch (_) {
        /* noop */
      }
    }, 200);
  };

  instance.resize = function patchedResize() {
    this.setSize();
    if (this.camera) {
      this.camera.aspect = this.width / this.height;
      if (typeof this.camera.updateProjectionMatrix === 'function') {
        this.camera.updateProjectionMatrix();
      }
    }
    if (this.renderer) {
      this.renderer.setSize(this.width, this.height);
      this.renderer.setPixelRatio(window.devicePixelRatio / this.scale);
    }
    if (typeof this.onResize === 'function') this.onResize();

    const w = this.width;
    const h = this.height;
    if (firstResize) {
      firstResize = false;
      lastW = w;
      lastH = h;
      return;
    }
    if (w === lastW && h === lastH) return;
    lastW = w;
    lastH = h;
    scheduleRestart();
  };

  return () => clearTimeout(debounceTimer);
}

/**
 * Vanta.js TOPOLOGY (p5) — как в официальном примере с vanta.topology.min.js + p5.
 * @see https://github.com/tengbao/vanta
 */
export default function VantaTopologyBg({
  className,
  /** Если true — не монтируем тяжёлый canvas (например prefers-reduced-motion). */
  disabled = false,
}) {
  const elRef = useRef(null);
  const vantaRef = useRef(null);
  const theme = useSyncExternalStore(subscribeTheme, getTheme, () => 'dark');

  useEffect(() => {
    if (disabled || typeof window === 'undefined') return;
    const el = elRef.current;
    if (!el) return;

    let cancelled = false;
    let clearResizeDebounce = () => {};
    let resizeObserver = null;

    (async () => {
      const p5mod = await import('p5');
      const p5 = p5mod.default;
      window.p5 = p5;

      await import('vanta/dist/vanta.topology.min.js');

      if (cancelled || !elRef.current) return;

      const TOPOLOGY = window.VANTA?.TOPOLOGY;
      if (typeof TOPOLOGY !== 'function') {
        console.warn('[VantaTopologyBg] VANTA.TOPOLOGY не найден после загрузки бандла.');
        return;
      }

      const instance = TOPOLOGY({
        el: elRef.current,
        p5,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        forceAnimate: true,
        color: 0xe0ed34,
        backgroundColor: VANTA_BG[theme] ?? VANTA_BG.dark,
      });
      vantaRef.current = instance;
      clearResizeDebounce = patchTopologyResize(instance);

      if (typeof ResizeObserver !== 'undefined' && elRef.current) {
        resizeObserver = new ResizeObserver(() => {
          if (vantaRef.current) vantaRef.current.resize();
        });
        resizeObserver.observe(elRef.current);
      }
    })().catch((e) => {
      console.warn('[VantaTopologyBg]', e);
    });

    return () => {
      cancelled = true;
      clearResizeDebounce();
      resizeObserver?.disconnect?.();
      try {
        vantaRef.current?.destroy?.();
      } catch (_) {
        /* noop */
      }
      vantaRef.current = null;
    };
  }, [disabled, theme]);

  if (disabled) return null;

  return (
    <div
      ref={elRef}
      className={cn('absolute inset-0 z-0 min-h-[200px] w-full', className)}
      aria-hidden
    />
  );
}
