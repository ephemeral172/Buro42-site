import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Apple, Camera, Droplet, Dumbbell, TrendingUp, Trophy, Smartphone, ExternalLink } from 'lucide-react';

const funcIcons = [Camera, Apple, Droplet, TrendingUp, Trophy];
const stackGradients = [
  'from-blue-500 to-cyan-500',
  'from-ifi-lime to-ifi-info',
  'from-purple-500 to-pink-500',
  'from-blue-400 to-blue-600',
];

export default function NutritionAppSection() {
  const { t } = useTranslation();
  const functionality = useMemo(() => {
    const texts = t('nutrition.items', { returnObjects: true });
    return texts.map((text, i) => ({
      icon: funcIcons[i] ?? Camera,
      text,
    }));
  }, [t]);

  const techStack = useMemo(() => {
    const raw = t('nutrition.stack', { returnObjects: true });
    return raw.map((row, i) => ({
      ...row,
      color: stackGradients[i] ?? 'from-blue-500 to-cyan-500',
    }));
  }, [t]);

  return (
    <section className="relative py-24 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Organic shapes background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-ifi-lime-border/35 to-blue-200/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/25 to-cyan-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <Dumbbell className="w-6 h-6 text-ifi-lime-ink" />
              <span className="text-ifi-lime-ink font-mono text-xs uppercase tracking-[0.2em]">
                {t('commonUi.caseBadge')}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-ifi-fg">{t('nutrition.title')}</h2>
            <p className="text-mineshaft-400 text-lg">{t('nutrition.subtitle')}</p>
            <a
              href="https://t.me/Eva_fitbot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-ifi-lime text-mineshaft-900 px-6 py-3 rounded-full font-semibold shadow-sm hover:bg-ifi-lime-hover transition-colors duration-300"
            >
              <Smartphone className="w-5 h-5" />
              @Eva_fitbot
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Functionality */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-ifi-fg mb-6 flex items-center gap-2 tracking-tight">
                <div className="w-1 h-6 bg-gradient-to-b from-ifi-lime-ink to-[#006eff] rounded-full" />
                {t('nutrition.functionality')}
              </h3>
              
              <div className="space-y-3">
                {functionality.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                    className="group"
                  >
                    <div className="bg-ifi-card border border-ifi-border rounded-xl p-4 hover:border-ifi-lime-border/80 shadow-sm transition-all duration-300 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-ifi-lime-soft flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <item.icon className="w-5 h-5 text-ifi-lime-ink" />
                      </div>
                      <span className="text-mineshaft-300">{item.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech implementation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-ifi-fg mb-6 flex items-center gap-2 tracking-tight">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full" />
                {t('nutrition.tech')}
              </h3>
              
              <div className="space-y-4">
                {techStack.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                    className="relative"
                  >
                    <div className="bg-mineshaft-900/30 border border-ifi-border rounded-xl p-4 hover:border-blue-200 shadow-sm transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-mineshaft-400 text-sm font-mono">{item.label}</span>
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      </div>
                      <div className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}