import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Link2,
  FolderOpen,
  Eye,
  Map,
  Users,
  Building2,
  ExternalLink,
  Layers,
} from 'lucide-react';

const featureMeta = [
  { icon: FolderOpen, color: 'text-cyan-400' },
  { icon: Link2, color: 'text-ifi-lime' },
  { icon: Eye, color: 'text-sky-400' },
  { icon: Map, color: 'text-amber-400' },
  { icon: Users, color: 'text-violet-400' },
  { icon: Building2, color: 'text-rose-400' },
];

const stackColors = [
  'from-ifi-lime to-cyan-500',
  'from-blue-500 to-indigo-500',
  'from-violet-500 to-fuchsia-600',
  'from-amber-500 to-orange-500',
];

export default function WyloSection() {
  const { t } = useTranslation();
  const featureTexts = useMemo(() => t('wylo.features', { returnObjects: true }), [t]);
  const features = useMemo(
    () =>
      featureTexts.map((text, i) => ({
        text,
        ...featureMeta[i],
      })),
    [featureTexts]
  );
  const techStack = useMemo(() => {
    const raw = t('wylo.stack', { returnObjects: true });
    return raw.map((row, i) => ({
      ...row,
      color: stackColors[i] ?? 'from-ifi-lime to-cyan-500',
    }));
  }, [t]);

  return (
    <section className="relative px-4 py-20 md:py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-4">
            <Layers className="h-6 w-6 text-ifi-lime" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ifi-lime">
              {t('commonUi.caseBadge')}
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-ifi-fg lg:text-5xl">
            {t('wylo.title')}
          </h2>
          <p className="max-w-3xl text-lg text-mineshaft-400">
            {t('wylo.introBefore')}{' '}
            <a
              href="https://wylo.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ifi-lime underline decoration-ifi-lime/40 underline-offset-2 hover:decoration-ifi-lime"
            >
              wylo.ru
            </a>
            {t('wylo.introAfter')}
          </p>
          <motion.a
            href="https://wylo.ru"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-ifi-border bg-mineshaft-900/60 px-5 py-2.5 text-sm font-semibold text-ifi-fg backdrop-blur-sm transition-colors hover:border-ifi-lime/35 hover:bg-mineshaft-800/70"
          >
            {t('wylo.cta')}
            <ExternalLink className="h-4 w-4 text-ifi-lime" />
          </motion.a>
        </motion.div>

        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={`${feature.text}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group rounded-2xl border border-ifi-border bg-mineshaft-900/55 p-5 backdrop-blur-sm transition-all hover:border-ifi-lime/20 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ifi-lime/12 ring-1 ring-ifi-lime/25">
                  <feature.icon className={`h-5 w-5 ${feature.color}`} />
                </div>
                <p className="text-sm leading-relaxed text-mineshaft-300">{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-8"
        >
          <h3 className="mb-4 flex items-center gap-2 text-xl font-bold tracking-tight text-ifi-fg">
            <div className="h-6 w-1 rounded-full bg-gradient-to-b from-ifi-lime to-cyan-500/90" />
            {t('wylo.techTitle')}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-ifi-border bg-mineshaft-900/50 p-4 shadow-sm transition-all hover:border-ifi-lime/25"
              >
                <p className="mb-2 font-mono text-xs text-mineshaft-400">{item.label}</p>
                <p className={`bg-gradient-to-r bg-clip-text text-sm font-bold text-transparent ${item.color}`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-center"
        >
          <p className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-ifi-border bg-mineshaft-900/70 px-5 py-3 font-mono text-sm text-mineshaft-400 backdrop-blur-sm">
            <Layers className="inline h-4 w-4 text-ifi-lime" />
            {t('wylo.footer')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
