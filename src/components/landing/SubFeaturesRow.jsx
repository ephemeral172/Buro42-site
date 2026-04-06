import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedLimeDot } from '@/components/landing/AnimatedLimeDot';

const block = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function SubFeaturesRow() {
  const { t } = useTranslation();
  const items = useMemo(() => {
    const raw = t('subFeatures.items', { returnObjects: true });
    const hrefs = ['#cases', '#cases', '#contact'];
    return raw.map((item, i) => ({ ...item, href: hrefs[i] ?? '#contact' }));
  }, [t]);
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3 md:gap-8">
        {items.map((item, i) => (
          <motion.div
            key={`${item.title}-${i}`}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px' }}
            variants={block}
            whileHover={{ y: -3, transition: { type: 'spring', stiffness: 420, damping: 26 } }}
            className="group/dot rounded-md border border-ifi-border bg-mineshaft-900/40 p-6 transition-colors duration-300 hover:border-mineshaft-600 md:p-8"
          >
            <div className="flex gap-4">
              <AnimatedLimeDot index={i} className="mt-0.5" />
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-ifi-fg transition-colors duration-200 group-hover/dot:text-ifi-lime/95">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mineshaft-400 transition-colors duration-200 group-hover/dot:text-mineshaft-300 md:text-base">
                  {item.text}
                </p>
              </div>
            </div>
            <motion.a
              href={item.href}
              className="mt-5 inline-flex items-center gap-1 pl-12 text-sm font-semibold text-ifi-lime hover:text-[#ecf26d]"
              whileHover={{ x: 3 }}
              transition={{ type: 'spring', stiffness: 420, damping: 26 }}
            >
              {t('commonUi.learnMore')}
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
