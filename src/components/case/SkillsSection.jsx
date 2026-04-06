import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Brain, Server, MessageSquare, Workflow, CreditCard, Cog, Lock } from 'lucide-react';
import VantaDotsBg from '@/components/landing/VantaDotsBg';

const skillMeta = [
  { icon: Brain, color: 'from-emerald-600 to-teal-500' },
  { icon: Server, color: 'from-teal-600 to-emerald-600' },
  { icon: MessageSquare, color: 'from-emerald-600 to-cyan-500' },
  { icon: Workflow, color: 'from-cyan-600 to-teal-600' },
  { icon: CreditCard, color: 'from-teal-500 to-emerald-600' },
  { icon: Cog, color: 'from-emerald-700 to-teal-600' },
  { icon: Lock, color: 'from-teal-700 to-emerald-700' },
];

export default function SkillsSection() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const skills = useMemo(() => {
    const titles = t('skills.titles', { returnObjects: true });
    return titles.map((title, i) => ({
      ...skillMeta[i],
      title,
    }));
  }, [t]);

  const statTriplet = useMemo(
    () => [
      { label: t('skills.statProfile'), value: t('skills.statProfileValue') },
      { label: t('skills.statDomains'), value: t('skills.statDomainsValue') },
      { label: t('skills.statDelivery'), value: t('skills.statDeliveryValue') },
    ],
    [t]
  );

  return (
    <section className="relative overflow-hidden py-24 md:py-28 px-4">
      {!reduceMotion && <VantaDotsBg className="min-h-full opacity-[0.55] md:opacity-60" />}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(25,25,28,0.94)_0%,rgba(25,25,28,0.88)_45%,rgba(25,25,28,0.93)_100%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-emerald-500" />
            <span className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-500">{t('skills.label')}</span>
          </div>
          <p className="text-mineshaft-400 max-w-2xl">{t('skills.intro')}</p>
        </motion.div>

        <div className="space-y-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -2 }}
              className="group relative overflow-hidden rounded-2xl border border-ifi-border bg-mineshaft-900/55 shadow-sm backdrop-blur-sm transition-all hover:border-mineshaft-600 hover:shadow-md"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-[0.06] group-hover:opacity-[0.1]`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                style={{ transformOrigin: 'left' }}
              />

              <div className="relative flex items-center gap-4 p-5">
                <div className="relative shrink-0">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}
                  >
                    <skill.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-ifi-fg group-hover:text-ifi-lime/90 transition-colors duration-300">
                    {skill.title}
                  </h3>
                </div>

                <div className="text-emerald-500/60 shrink-0 transition-colors duration-300 group-hover:text-ifi-lime/80">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <motion.div
                className={`h-0.5 bg-gradient-to-r ${skill.color}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: index * 0.05 }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid grid-cols-3 gap-3 sm:gap-4"
        >
          {statTriplet.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl border border-ifi-border bg-ifi-card p-4 text-center shadow-sm"
            >
              <p className="text-emerald-500 font-mono text-[10px] sm:text-xs mb-1 tracking-wider">
                {stat.label}
              </p>
              <p className="text-ifi-fg font-bold text-xs sm:text-sm">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
