import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Brain,
  Database,
  Server,
  Shield,
  Zap,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Target,
  Cpu,
  Workflow,
  ExternalLink,
} from 'lucide-react';

const featureMeta = [
  { icon: Brain, color: 'text-blue-500' },
  { icon: Database, color: 'text-cyan-500' },
  { icon: Workflow, color: 'text-indigo-500' },
  { icon: Shield, color: 'text-ifi-lime' },
];

const stackGradients = [
  'from-blue-500 to-indigo-500',
  'from-cyan-500 to-blue-500',
  'from-orange-500 to-red-500',
  'from-ifi-lime to-ifi-info',
];

export default function RAGPlatformSection() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const keyFeatures = useMemo(() => {
    const texts = t('rag.features', { returnObjects: true });
    return texts.map((text, i) => ({
      text,
      ...featureMeta[i],
    }));
  }, [t]);

  const techStack = useMemo(() => {
    const raw = t('rag.stack', { returnObjects: true });
    return raw.map((row, i) => ({
      ...row,
      color: stackGradients[i] ?? 'from-blue-500 to-indigo-500',
    }));
  }, [t]);

  const expandedDetails = useMemo(() => {
    const labels = t('rag.effectLabels', { returnObjects: true });
    const values = t('rag.effectValues', { returnObjects: true });
    const descs = t('rag.effectDescs', { returnObjects: true });
    return {
      problem: t('rag.problems', { returnObjects: true }),
      solution: t('rag.solutions', { returnObjects: true }),
      results: labels.map((label, i) => ({
        label,
        value: values[i],
        desc: descs[i],
      })),
    };
  }, [t]);

  return (
    <section className="relative px-4 py-20 md:py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-4">
            <Cpu className="h-6 w-6 text-ifi-lime" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ifi-lime">{t('commonUi.caseBadge')}</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-ifi-fg lg:text-5xl">{t('rag.title')}</h2>
          <p className="max-w-3xl text-lg text-mineshaft-400">
            {t('rag.introBefore')}{' '}
            <a
              href="https://axioma8.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ifi-lime underline decoration-ifi-lime/40 underline-offset-2 hover:decoration-ifi-lime"
            >
              axioma8.ru
            </a>
            {t('rag.introAfter')}
          </p>
          <motion.a
            href="https://axioma8.ru"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-ifi-border bg-mineshaft-900/60 px-5 py-2.5 text-sm font-semibold text-ifi-fg backdrop-blur-sm transition-colors hover:border-ifi-lime/35 hover:bg-mineshaft-800/70"
          >
            {t('rag.cta')}
            <ExternalLink className="h-4 w-4 text-ifi-lime" />
          </motion.a>
        </motion.div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          {keyFeatures.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-ifi-border bg-mineshaft-900/55 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-ifi-lime/20 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ifi-lime/12 ring-1 ring-ifi-lime/20 transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className={`h-5 w-5 ${feature.color}`} />
                </div>
                <span className="text-mineshaft-300">{feature.text}</span>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="mb-4 flex items-center gap-2 text-xl font-bold tracking-tight text-ifi-fg">
            <div className="h-6 w-1 rounded-full bg-gradient-to-b from-ifi-lime to-cyan-600/80" />
            {t('rag.techTitle')}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-ifi-border bg-mineshaft-900/50 p-4 shadow-sm transition-all duration-300 hover:border-ifi-lime/25"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-sm text-mineshaft-400">{item.label}</span>
                  <div className="h-2 w-2 rounded-full bg-ifi-lime/90 shadow-[0_0_8px_rgba(224,237,52,0.35)]" />
                </div>
                <div className={`bg-gradient-to-r bg-clip-text text-base font-bold text-transparent ${item.color}`}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="overflow-hidden rounded-2xl border border-ifi-border bg-mineshaft-900/60 shadow-sm backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="group flex w-full items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-mineshaft-800/60"
            >
              <div className="flex items-center gap-3">
                <Zap className="h-6 w-6 text-ifi-lime" />
                <span className="text-xl font-bold text-ifi-fg">{t('rag.expandTitle')}</span>
              </div>
              <div className="text-ifi-lime">
                {expanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-ifi-border/60"
                >
                  <div className="space-y-8 p-6">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 flex items-center gap-2 font-semibold text-ifi-fg">
                          <Target className="h-4 w-4 text-ifi-lime" /> {t('rag.challengesHeading')}
                        </h4>
                        <ul className="space-y-2">
                          {expandedDetails.problem.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-mineshaft-400">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ifi-lime/90" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-3 flex items-center gap-2 font-semibold text-ifi-fg">
                          <Server className="h-4 w-4 text-ifi-lime" /> {t('rag.implementationHeading')}
                        </h4>
                        <ul className="space-y-2">
                          {expandedDetails.solution.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-mineshaft-400">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ifi-lime/90" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-4 flex items-center gap-2 font-semibold text-ifi-fg">
                        <TrendingUp className="h-4 w-4 text-ifi-lime" /> {t('rag.businessHeading')}
                      </h4>
                      <div className="grid gap-4 sm:grid-cols-3">
                        {expandedDetails.results.map((result, i) => (
                          <div
                            key={i}
                            className="rounded-xl border border-ifi-border bg-mineshaft-900/50 p-4"
                          >
                            <p className="mb-1 font-mono text-xs uppercase tracking-wider text-ifi-lime/90">
                              {result.label}
                            </p>
                            <p className="mb-1 text-2xl font-bold text-ifi-fg">{result.value}</p>
                            <p className="text-xs text-mineshaft-400">{result.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative mt-8 overflow-hidden rounded-r-xl border border-ifi-border border-l-4 border-l-ifi-lime bg-mineshaft-900/55 p-6 backdrop-blur-sm"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_0%_50%,rgba(224,237,52,0.07),transparent_65%)]"
            aria-hidden
          />
          <p className="relative leading-relaxed text-mineshaft-400">{t('rag.footerQuote')}</p>
        </motion.div>
      </div>
    </section>
  );
}
