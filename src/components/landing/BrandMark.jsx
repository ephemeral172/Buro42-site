import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Логотип «Buro42»: «42» с лаймово‑cyan шиммером; лёгкий spring на hover.
 */
export default function BrandMark({ className }) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      className={cn('inline-flex select-none items-baseline font-brand', className)}
      whileHover={reduce ? undefined : { scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
    >
      <span className="text-ifi-fg">Buro</span>
      <span className="inline-block bg-gradient-to-r from-ifi-lime via-[#f5ff8a] to-[#63b0bd] bg-[length:200%_100%] bg-clip-text text-transparent animate-brand-shimmer tabular-nums">
        42
      </span>
    </motion.span>
  );
}
