import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AnimatedLimeDot } from '@/components/landing/AnimatedLimeDot';

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.42, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function GovernanceSection() {
  const { t } = useTranslation();
  const cards = useMemo(() => t('governance.cards', { returnObjects: true }), [t]);
  return (
    <section className="border-y border-ifi-border bg-mineshaft-900/35 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-ifi-fg md:text-4xl">
            {t('governance.title')}
          </h2>
          <p className="mt-4 text-lg text-mineshaft-400">{t('governance.subtitle')}</p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cards.map((c, i) => (
            <motion.div
              key={`${c.title}-${i}`}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-8% 0px' }}
              variants={cardVariants}
              whileHover={{ y: -3, transition: { type: 'spring', stiffness: 420, damping: 26 } }}
              className="group/dot relative overflow-hidden rounded-xl border border-ifi-border bg-gradient-to-b from-mineshaft-800/45 to-mineshaft-900/85 p-6 shadow-[0_-20px_48px_-16px_rgba(0,0,0,0.35)] backdrop-blur-[2px] transition-colors duration-300 hover:border-ifi-lime/25 md:p-7"
            >
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-ifi-lime/55 via-ifi-lime/15 to-transparent opacity-0 transition-opacity duration-300 group-hover/dot:opacity-100"
                aria-hidden
              />
              <div className="flex gap-4">
                <AnimatedLimeDot index={i} className="mt-0.5" />
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold leading-snug text-ifi-fg transition-colors duration-200 group-hover/dot:text-ifi-lime/95">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mineshaft-400 transition-colors duration-200 group-hover/dot:text-mineshaft-300 md:text-base">
                    {c.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
