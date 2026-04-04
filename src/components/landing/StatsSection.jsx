import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const stats = [
  {
    kind: 'range',
    low: 24,
    high: 48,
    label: 'часов до первого demo-пакета',
    hint: 'при готовности вводных',
    href: '#cases',
  },
  {
    kind: 'text',
    value: 'Enterprise',
    label: 'фокус на крупном бизнесе',
    hint: 'данные · AI · интеграции',
    href: '#platform',
  },
  {
    kind: 'percent',
    value: 100,
    label: 'прозрачность этапов',
    hint: 'пилот → прод',
    href: '#contact',
  },
];

function StatFigure({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-12% 0px' });
  const [text, setText] = useState(() => {
    if (stat.kind === 'percent') return '0%';
    if (stat.kind === 'range') return '0–0';
    return stat.value;
  });

  useEffect(() => {
    if (!isInView || stat.kind === 'text') return undefined;

    if (stat.kind === 'percent') {
      const ctrl = animate(0, stat.value, {
        duration: 1.35,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => setText(`${Math.round(v)}%`),
      });
      return () => ctrl.stop();
    }

    if (stat.kind === 'range') {
      const ctrl = animate(0, 1, {
        duration: 1.35,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          const low = Math.round(stat.low * latest);
          const high = Math.round(stat.high * latest);
          setText(`${low}–${high}`);
        },
      });
      return () => ctrl.stop();
    }

    return undefined;
  }, [isInView, stat]);

  return (
    <motion.p
      ref={ref}
      className="w-full text-center text-4xl font-semibold tracking-tight text-ifi-fg tabular-nums md:text-5xl"
      initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
      animate={
        isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 14, filter: 'blur(8px)' }
      }
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {stat.kind === 'text' ? stat.value : text}
    </motion.p>
  );
}

export default function StatsSection() {
  return (
    <section className="border-y border-ifi-border bg-mineshaft-900/50 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3 md:gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -2 }}
            className="flex flex-col items-center text-center"
          >
            <StatFigure stat={s} index={i} />
            <p className="mt-2 max-w-xs text-base font-medium text-ifi-fg">{s.label}</p>
            <p className="mt-1 max-w-xs text-sm text-mineshaft-400">{s.hint}</p>
            <motion.a
              href={s.href}
              className="mt-4 inline-flex items-center justify-center gap-1 text-sm font-semibold text-ifi-lime hover:text-[#ecf26d]"
              whileHover={{ x: 2 }}
              transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            >
              Подробнее
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
