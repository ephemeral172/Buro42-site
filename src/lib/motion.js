/** Shared Framer Motion presets — Buro42 light theme */

export const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0.05) => ({
  animate: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const fadeInUpChild = (duration = 0.5) => ({
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: [0.22, 1, 0.36, 1] },
  },
});

export const viewFadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-12% 0px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

export const viewStaggerItem = (index, base = 0.06) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-12% 0px' },
  transition: { duration: 0.45, delay: index * base, ease: [0.22, 1, 0.36, 1] },
});
