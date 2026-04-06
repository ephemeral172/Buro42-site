import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Marquee } from '@/components/ui/marquee';

const BRAND_KEYS = [
  'b2bFintech',
  'retail',
  'industry',
  'telecom',
  'media',
  'ecommerce',
  'enterpriseIt',
  'dataAi',
];

function LogoCell({ label }) {
  return (
    <div className="flex h-12 shrink-0 items-center justify-center px-8">
      <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-mineshaft-300 transition-colors duration-300 hover:text-ifi-fg md:text-base">
        {label}
      </span>
    </div>
  );
}

export default function TechMarqueeStrip() {
  const { t } = useTranslation();
  const brands = useMemo(
    () => BRAND_KEYS.map((k) => t(`marquee.${k}`)),
    [t]
  );
  return (
    <section className="border-y border-ifi-border bg-mineshaft-900/35 py-8">
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-6 text-center text-xs font-medium uppercase tracking-[0.14em] text-mineshaft-400"
      >
        {t('marquee.caption')}
      </motion.p>
      <Marquee pauseOnHover className="[--duration:50s] [--gap:0.5rem]">
        {brands.map((label) => (
          <LogoCell key={label} label={label} />
        ))}
      </Marquee>
    </section>
  );
}
