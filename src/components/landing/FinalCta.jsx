import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ObfuscatedEmailLink from '@/components/landing/ObfuscatedEmailLink';

export default function FinalCta() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="scroll-mt-20 border-y border-ifi-border py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl font-semibold tracking-tight text-ifi-fg md:text-4xl"
        >
          {t('finalCta.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-lg text-mineshaft-400"
        >
          {t('finalCta.body')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-2"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-mineshaft-500">
            {t('finalCta.email')}
          </p>
          <ObfuscatedEmailLink className="!text-base" />
        </motion.div>
      </div>
    </section>
  );
}
