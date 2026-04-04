import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import VantaTrunkBg from '@/components/landing/VantaTrunkBg';

export default function QuoteBand() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[220px] overflow-hidden border-y border-ifi-border py-16 md:min-h-[260px] md:py-20">
      {!reduceMotion && (
        <VantaTrunkBg chaos={10} spacing={2} className="opacity-[0.32] md:opacity-40" />
      )}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(25,25,28,0.88)_0%,rgba(25,25,28,0.82)_50%,rgba(25,25,28,0.9)_100%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.18em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.14em' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase text-ifi-lime"
        >
          Подход
        </motion.p>
        <motion.blockquote
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-xl font-medium leading-snug text-ifi-fg md:text-2xl"
        >
          «Сложные продукты живут годами: мы закладываем архитектуру, данные и эксплуатацию так, чтобы
          команда заказчика могла развивать систему без хаоса.»
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 text-sm text-mineshaft-400"
        >
          Buro42 — бюро разработки IT‑продуктов
        </motion.p>
      </div>
    </section>
  );
}
