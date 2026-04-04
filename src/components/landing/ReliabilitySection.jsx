import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedLimeDot } from '@/components/landing/AnimatedLimeDot';
import VantaTrunkBg, {
  VANTA_TRUNK_DEFAULT_BG,
  VANTA_TRUNK_DEFAULT_COLOR,
} from '@/components/landing/VantaTrunkBg';

const items = [
  {
    title: 'Соответствие практикам',
    text: 'Учитываем требования заказчика к ИБ, хранению данных и процессам — без лишних обещаний в маркетинге.',
    href: '#contact',
  },
  {
    title: 'Надёжность поставки',
    text: 'Договорённости по этапам, артефактам и наблюдаемости в эксплуатации.',
    href: '#contact',
  },
  {
    title: 'Защита данных',
    text: 'Шифрование в транзите и на диске там, где уместно; сегментация сред и секретов.',
    href: '#contact',
  },
  {
    title: 'Ваш контур',
    text: 'On‑prem, VPC или гибрид — конфигурация под политику и регуляторику.',
    href: '#contact',
  },
];

const row = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.42, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ReliabilitySection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <VantaTrunkBg
        chaos={2}
        spacing={10}
        color={VANTA_TRUNK_DEFAULT_COLOR}
        backgroundColor={VANTA_TRUNK_DEFAULT_BG}
        className="opacity-[0.22] md:opacity-[0.3]"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-mineshaft-900/35 via-transparent to-mineshaft-900/50"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-ifi-fg md:text-4xl">
            Надёжность, с которой можно планировать
          </h2>
          <p className="mt-4 text-lg text-mineshaft-400">Прозрачные договорённости, а не только «мы всё сделаем».</p>
        </motion.div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-8% 0px' }}
              variants={row}
              whileHover={{ y: -3, transition: { type: 'spring', stiffness: 420, damping: 24 } }}
              className="group/dot rounded-md border border-ifi-border bg-mineshaft-900/40 p-6 transition-shadow hover:shadow-md hover:shadow-black/15 md:p-8"
            >
              <div className="flex gap-4">
                <AnimatedLimeDot index={i} className="mt-0.5" />
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-ifi-fg transition-colors duration-200 group-hover/dot:text-ifi-lime/95">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-mineshaft-400 transition-colors duration-200 group-hover/dot:text-mineshaft-300">
                    {item.text}
                  </p>
                </div>
              </div>
              <motion.a
                href={item.href}
                className="mt-4 inline-flex items-center gap-1 pl-12 text-sm font-semibold text-ifi-lime hover:text-[#ecf26d]"
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 450, damping: 26 }}
              >
                Подробнее
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
