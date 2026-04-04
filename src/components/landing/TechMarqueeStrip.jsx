import React from 'react';
import { motion } from 'framer-motion';
import { Marquee } from '@/components/ui/marquee';

/** Полоса «логотипов» как у Infisical — нейтральные плашки, бегущая строка. */
const BRANDS = [
  'В2В · Финтех',
  'Ритейл',
  'Промышленность',
  'Телеком',
  'Медиа',
  'E‑commerce',
  'Enterprise IT',
  'Data & AI',
];

function LogoCell({ label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      transition={{ type: 'spring', stiffness: 500, damping: 24 }}
      className="flex h-12 shrink-0 items-center justify-center px-8"
    >
      <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-mineshaft-300 md:text-base">
        {label}
      </span>
    </motion.div>
  );
}

export default function TechMarqueeStrip() {
  return (
    <section className="border-y border-ifi-border bg-mineshaft-900/35 py-8">
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-6 text-center text-xs font-medium uppercase tracking-[0.14em] text-mineshaft-400"
      >
        Опыт работы с крупным бизнесом и сложными контурами
      </motion.p>
      <Marquee pauseOnHover className="[--duration:50s] [--gap:0.5rem]">
        {BRANDS.map((label) => (
          <LogoCell key={label} label={label} />
        ))}
      </Marquee>
    </section>
  );
}
