import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * Vanta.js TRUNK (p5) — см. vanta.trunk.min.js + p5.
 * @see https://github.com/tengbao/vanta
 */
/** Дефолты как в vanta/src/vanta.trunk.js (если в конфиге не задавать цвета). */
export const VANTA_TRUNK_DEFAULT_COLOR = 0x98465f;
export const VANTA_TRUNK_DEFAULT_BG = 0x222426;

export default function VantaTrunkBg({
  className,
  disabled = false,
  /** Интенсивность деформации колец (см. опцию Vanta TRUNK). */
  chaos = 1,
  spacing = 2,
  /** Линии эффекта (hex number, напр. 0xe0ed34). По умолчанию — ifi-lime под бренд сайта. */
  color = 0xe0ed34,
  /** Заливка фона канваса Vanta. */
  backgroundColor = 0x19191c,
}) {
  const elRef = useRef(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (disabled || typeof window === 'undefined') return;
    if (!elRef.current) return;

    let cancelled = false;
    let resizeObserver = null;

    (async () => {
      const p5mod = await import('p5');
      const p5 = p5mod.default;
      window.p5 = p5;

      await import('vanta/dist/vanta.trunk.min.js');

      if (cancelled || !elRef.current) return;

      const TRUNK = window.VANTA?.TRUNK;
      if (typeof TRUNK !== 'function') {
        console.warn('[VantaTrunkBg] VANTA.TRUNK не найден после загрузки бандла.');
        return;
      }

      const instance = TRUNK({
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
        color,
        backgroundColor,
        spacing,
        chaos,
      });
      vantaRef.current = instance;

      if (typeof ResizeObserver !== 'undefined' && elRef.current) {
        resizeObserver = new ResizeObserver(() => {
          if (vantaRef.current) vantaRef.current.resize();
        });
        resizeObserver.observe(elRef.current);
      }
    })().catch((e) => {
      console.warn('[VantaTrunkBg]', e);
    });

    return () => {
      cancelled = true;
      resizeObserver?.disconnect?.();
      try {
        vantaRef.current?.destroy?.();
      } catch (_) {
        /* noop */
      }
      vantaRef.current = null;
    };
  }, [disabled, chaos, spacing, color, backgroundColor]);

  if (disabled) return null;

  return (
    <div
      ref={elRef}
      className={cn('absolute inset-0 z-0 min-h-[200px] w-full', className)}
      aria-hidden
    />
  );
}
