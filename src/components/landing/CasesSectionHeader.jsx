import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function CasesSectionHeader() {
  const { t } = useTranslation();
  return (
    <div id="cases" className="scroll-mt-20 px-4 pb-10 pt-16 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-6xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ifi-lime">{t('casesHeader.label')}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ifi-fg md:text-4xl">
          {t('casesHeader.title')}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-mineshaft-400">{t('casesHeader.subtitle')}</p>
      </motion.div>
    </div>
  );
}
