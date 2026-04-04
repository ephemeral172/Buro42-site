import React from 'react';
import { motion } from 'framer-motion';

const product = [
  { href: '#platform', label: 'Платформа' },
  { href: '#integrations', label: 'Интеграции' },
  { href: '#cases', label: 'Кейсы' },
];

const company = [{ href: '#contact', label: 'Контакты' }];

export default function Footer() {
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
            <p className="font-display text-lg font-semibold tracking-tight text-ifi-fg">Buro42</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ifi-label">
              Бюро разработки IT‑продуктов для крупного бизнеса: AI, данные, ML и интеграции в вашем
              контуре.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-ifi-muted">Разделы</p>
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
                    transition={{ type: 'spring', stiffness: 400, damping: 24 }}
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
            <p className="text-xs font-semibold uppercase tracking-wider text-ifi-muted">Связь</p>
            <ul className="mt-4 space-y-2">
              {company.map((item) => (
                <li key={item.label}>
                  <motion.a
                    href={item.href}
                    className="text-sm text-ifi-label transition hover:text-ifi-fg"
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 24 }}
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
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
