import React, { useEffect, useMemo, useRef, useState } from 'react';
import { animate, motion, useAnimationControls, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';

function StatFigure({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-12% 0px' });
  const pulseCtrl = useAnimationControls();
  const [text, setText] = useState(() => {
    if (stat.kind === 'percent') return '0%';
    if (stat.kind === 'range') return '0–0';
    return stat.value;
  });

  const triggerPulse = () => {
    pulseCtrl.start({
      scale: [1, 1.06, 1],
      textShadow: [
        '0 0 0px rgba(224,237,52,0)',
        '0 0 24px rgba(224,237,52,0.45)',
        '0 0 0px rgba(224,237,52,0)',
      ],
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    });
  };

  useEffect(() => {
    if (!isInView) return undefined;

    if (stat.kind === 'text') {
      const t = setTimeout(triggerPulse, 350 + index * 60);
      return () => clearTimeout(t);
    }

    if (stat.kind === 'percent') {
      const ctrl = animate(0, stat.value, {
        duration: 1.35,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => setText(`${Math.round(v)}%`),
        onComplete: triggerPulse,
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
        onComplete: triggerPulse,
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
        isInView
          ? { opacity: 1, y: 0, filter: 'blur(0px)' }
          : { opacity: 0, y: 14, filter: 'blur(8px)' }
      }
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.span animate={pulseCtrl} className="inline-block">
        {stat.kind === 'text' ? stat.value : text}
      </motion.span>
    </motion.p>
  );
}

export default function StatsSection() {
  const { t } = useTranslation();
  const stats = useMemo(
    () => [
      {
        kind: 'range',
        low: 24,
        high: 48,
        label: t('stats.stat1Label'),
        hint: t('stats.stat1Hint'),
        href: '#cases',
      },
      {
        kind: 'text',
        value: t('stats.stat2Value'),
        label: t('stats.stat2Label'),
        hint: t('stats.stat2Hint'),
        href: '#platform',
      },
      {
        kind: 'percent',
        value: 100,
        label: t('stats.stat3Label'),
        hint: t('stats.stat3Hint'),
        href: '#contact',
      },
    ],
    [t]
  );

  return (
    <section className="border-y border-ifi-border bg-mineshaft-900/50 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3 md:gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
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
