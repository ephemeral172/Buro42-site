import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Frosted glass surface inspired by Uiverse-style cards: soft accents + backdrop blur + hover glow.
 * Outer layer holds decorative shapes; inner layer is the actual glass panel.
 */
export default function GlassCard({ children, className, innerClassName, compact }) {
  return (
    <div className={cn('group/glass relative isolate h-full', className)}>
      <span
        className={cn(
          'pointer-events-none absolute -z-10 rounded-full bg-[#fab570]/35',
          'right-[7%] top-[28%]',
          compact ? 'h-14 w-14' : 'h-24 w-24'
        )}
        aria-hidden
      />
      <span
        className={cn(
          'pointer-events-none absolute -z-10 rounded-sm border border-white/22',
          'right-[5%] top-[8%]',
          compact ? 'h-7 w-9' : 'h-12 w-11'
        )}
        aria-hidden
      />
      <div
        className={cn(
          'relative z-10 flex h-full min-h-0 flex-col overflow-hidden rounded-[0.7rem]',
          'border border-white/[0.22] bg-white/[0.074]',
          'shadow-[0_-28px_72px_-22px_rgba(0,0,0,0.4)]',
          'backdrop-blur-[20px] backdrop-saturate-150',
          'transition-[border-color,box-shadow] duration-300 ease-out',
          'group-hover/glass:border-ifi-lime/30 group-hover/glass:shadow-[0_0_22px_1px_rgba(224,237,52,0.2)]',
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
