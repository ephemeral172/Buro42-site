import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';

const tools = [
  'Python',
  'TypeScript',
  'Node.js',
  'React',
  'Vue.js',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Redis',
  'Qdrant',
  'FastAPI',
  'Docker',
  'RabbitMQ',
  'REST API',
  'GraphQL',
  'WebSocket',
  'LangChain',
  'n8n',
  'Grafana',
  'Apache Superset',
  'OpenAI API',
  'Hugging Face',
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 8 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function IntegrationsGrid() {
  const { t } = useTranslation();
  return (
    <section id="integrations" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-ifi-fg md:text-4xl">
            {t('integrations.title')}
          </h2>
          <p className="mt-4 text-lg text-mineshaft-400">{t('integrations.subtitle')}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {tools.map((name, i) => (
            <motion.div
              key={name}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-8% 0px' }}
              variants={itemVariants}
              whileHover={{ scale: 1.03, borderColor: 'rgba(224,237,52,0.25)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 450, damping: 26 }}
              className="flex cursor-default items-center justify-center rounded-md border border-ifi-border bg-mineshaft-900/40 py-4 text-center text-sm font-semibold text-ifi-fg"
            >
              {name}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-1 text-sm font-semibold text-ifi-lime transition hover:text-[#ecf26d]"
          >
            {t('integrations.cta')}
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.p>
      </div>
    </section>
  );
}
