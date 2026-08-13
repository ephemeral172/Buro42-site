import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import VantaTopologyBg from '@/components/landing/VantaTopologyBg';
import { cn } from '@/lib/utils';

const blockVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const h1Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.02 },
  },
};

const fadeUpBlur = (reduce) => ({
  hidden: {
    opacity: 0,
    y: reduce ? 8 : 28,
    filter: reduce ? 'blur(0px)' : 'blur(12px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: reduce ? 0.35 : 0.75, ease: [0.16, 1, 0.3, 1] },
  },
});

/**
 * Hero с анимацией в духе маркетинговых страниц Infisical (careers и др. —
 * крупный градиент, разбитый заголовок, мягкий stagger).
 */
export default function InfisicalHero() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[72vh] overflow-hidden md:min-h-[78vh]">
      {/* Vanta TOPOLOGY (p5) — при обычном motion; при reduce-motion — статичный neon SVG */}
      {!reduceMotion && <VantaTopologyBg className="opacity-90" />}
      {reduceMotion && (
        <div
          className={cn(
            'xs:-top-16 absolute -top-8 z-0 hidden w-[min(1800px,100vw)] max-w-[1800px] pl-4 pt-40 md:block lg:-top-44 2xl:pt-60',
            'left-1/2 -translate-x-1/2'
          )}
          aria-hidden
        >
          <img
            src="/images/neon-loops.svg"
            alt=""
            width={1800}
            height={800}
            loading="lazy"
            decoding="async"
            className="mx-auto h-auto w-full"
          />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_55%_36%_at_50%_14%,rgba(224,237,52,0.08),transparent_56%)]" />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-20 text-center sm:pt-24 md:pb-28 md:pt-32 lg:pt-36"
        variants={blockVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={h1Variants}
          className="font-display text-balance text-display-sm font-black tracking-tight sm:text-display md:text-display lg:text-display-lg xl:text-display-xl 2xl:text-display-2xl"
        >
          <motion.span variants={fadeUpBlur(reduceMotion)} className="block text-ifi-fg">
            {t('hero.line1')}
          </motion.span>
          <motion.span
            variants={fadeUpBlur(reduceMotion)}
            className="mt-2 block bg-gradient-to-r from-ifi-lime via-[#ecf26d] to-[#63b0bd] bg-clip-text pb-0.5 text-transparent md:mt-3"
          >
            {t('hero.line2')}
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeUpBlur(reduceMotion)}
          className="mx-auto mt-8 max-w-2xl text-balance text-lg font-medium leading-[1.65] tracking-[-0.01em] text-mineshaft-300 md:mt-10 md:text-xl md:leading-[1.7]"
        >
          {t('hero.lead')}
        </motion.p>

        <motion.div
          variants={fadeUpBlur(reduceMotion)}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={reduceMotion ? undefined : { scale: 1.02, y: -1 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 450, damping: 22 }}
            className="inline-flex h-10 min-w-[140px] items-center justify-center rounded-md bg-ifi-lime px-7 text-sm font-semibold text-ifi-ink transition hover:bg-ifi-lime-hover"
          >
            {t('hero.ctaDiscuss')}
          </motion.a>
          <motion.a
            href="#cases"
            whileHover={reduceMotion ? undefined : { scale: 1.02, y: -1 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 450, damping: 22 }}
            className="inline-flex h-10 min-w-[140px] items-center justify-center rounded-md border border-ifi-border px-7 text-sm font-semibold text-ifi-fg transition hover:border-ifi-fg/25 hover:bg-ifi-fg/10"
          >
            {t('hero.ctaCases')}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
