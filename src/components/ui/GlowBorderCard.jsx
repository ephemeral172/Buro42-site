import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Card with a gradient border (lime → cyan) and a soft blurred glow shadow
 * that fades out on hover, drawing the eye to the content.
 */
export default function GlowBorderCard({ children, className, innerClassName }) {
  return (
    <div className={cn('group/glow relative z-0 rounded-xl p-px', className)}>
      <div
        className="absolute inset-0 rounded-xl bg-gradient-to-l from-ifi-lime via-[#9dd48a] to-[#63b0bd]"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 translate-y-7 scale-[0.82] rounded-xl bg-gradient-to-l from-ifi-lime via-[#9dd48a] to-[#63b0bd] opacity-50 blur-[22px] transition-opacity duration-500 group-hover/glow:opacity-0"
        aria-hidden
      />
      <div
        className={cn(
          'relative h-full rounded-[calc(0.75rem-1px)] bg-mineshaft-900 transition-colors duration-700 group-hover/glow:bg-mineshaft-900/95',
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
