import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BrandMark from '@/components/landing/BrandMark';
import ObfuscatedEmailLink from '@/components/landing/ObfuscatedEmailLink';

const productDefs = [
  { href: '#platform', key: 'platform' },
  { href: '#integrations', key: 'integrations' },
  { href: '#cases', key: 'cases' },
];

export default function Footer() {
  const { t } = useTranslation();
  const product = useMemo(
    () => productDefs.map((p) => ({ ...p, label: t(`nav.${p.key}`) })),
    [t]
  );
  const company = useMemo(() => [{ href: '#contact', label: t('nav.contacts') }], [t]);
  return (
    <footer className="border-t border-ifi-border bg-ifi-bg text-mineshaft-200">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <p className="text-lg font-semibold tracking-tight text-ifi-fg">
              <BrandMark />
            </p>
            <p className="mt-2 text-sm font-medium leading-snug text-mineshaft-300">
              {t('footer.tagline')}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ifi-label">
              {t('footer.blurb')}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-ifi-muted">
              {t('footer.sections')}
            </p>
            <ul className="mt-4 space-y-2">
              {product.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                >
                  <motion.a
                    href={item.href}
                    className="text-sm text-ifi-label transition hover:text-ifi-fg"
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 26 }}
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-ifi-muted">
              {t('footer.connect')}
            </p>
            <ul className="mt-4 space-y-2">
              {company.map((item) => (
                <li key={item.label}>
                  <motion.a
                    href={item.href}
                    className="text-sm text-ifi-label transition hover:text-ifi-fg"
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 26 }}
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
              <li className="pt-2">
                <ObfuscatedEmailLink />
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-14 border-t border-ifi-border pt-8 text-center text-sm text-ifi-muted"
        >
          © {new Date().getFullYear()} Buro42
        </motion.div>
      </div>
    </footer>
  );
}
