import { motion, useReducedMotion } from 'framer-motion';

/**
 * Лаймовая точка с мягкой рябью и пульсацией; уважает prefers-reduced-motion.
 */
export function AnimatedLimeDot({ index = 0, className = '' }) {
  const reduce = useReducedMotion();
  const phase = index * 0.42;

  return (
    <div className={`relative flex h-8 w-8 shrink-0 items-center justify-center ${className}`}>
      {!reduce && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ifi-lime"
          initial={false}
          animate={{ scale: [1, 2.65, 1], opacity: [0.42, 0, 0.42] }}
          transition={{
            duration: 2.75,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
            delay: phase,
          }}
        />
      )}
      <motion.span
        className="relative z-[1] flex h-4 w-4 items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 460, damping: 22, delay: index * 0.07 + 0.04 }}
      >
        <motion.span
          className="block h-1.5 w-1.5 rounded-full bg-ifi-lime shadow-[0_0_14px_rgba(224,237,52,0.55)] ring-1 ring-ifi-lime/45 transition-transform duration-200 group-hover/dot:scale-125"
          {...(reduce
            ? {}
            : {
                animate: { scale: [1, 1.14, 1], opacity: [1, 0.88, 1] },
                transition: {
                  duration: 1.9,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: phase + 0.35,
                },
              })}
        />
      </motion.span>
    </div>
  );
}
