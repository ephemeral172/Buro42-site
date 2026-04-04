import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * Vanta.js DOTS (Three.js r134) — см. vanta.dots.min.js + THREE.
 */
export default function VantaDotsBg({
  className,
  disabled = false,
}) {
  const elRef = useRef(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (disabled || typeof window === 'undefined') return;
    if (!elRef.current) return;

    let cancelled = false;
    let resizeObserver = null;

    (async () => {
      const THREE = await import('three');
      await import('vanta/dist/vanta.dots.min.js');

      if (cancelled || !elRef.current) return;

      const DOTS = window.VANTA?.DOTS;
      if (typeof DOTS !== 'function') {
        console.warn('[VantaDotsBg] VANTA.DOTS не найден после загрузки бандла.');
        return;
      }

      const instance = DOTS({
        el: elRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        forceAnimate: true,
        color: 0xe0ed34,
        color2: 0x63b0bd,
        backgroundColor: 0x19191c,
        size: 2.5,
        spacing: 38,
        showLines: true,
      });
      vantaRef.current = instance;

      if (typeof ResizeObserver !== 'undefined' && elRef.current) {
        resizeObserver = new ResizeObserver(() => {
          vantaRef.current?.resize?.();
        });
        resizeObserver.observe(elRef.current);
      }
    })().catch((e) => {
      console.warn('[VantaDotsBg]', e);
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
  }, [disabled]);

  if (disabled) return null;

  return (
    <div
      ref={elRef}
      className={cn('absolute inset-0 z-0 min-h-[200px] w-full', className)}
      aria-hidden
    />
  );
}
