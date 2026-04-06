import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Server,
  Database,
  Cpu,
  Cloud,
  Box,
  Code2,
  FileCode,
  Sparkles,
  Inbox,
  Brain,
  LayoutDashboard,
  ChartColumn,
  Activity,
  Radio,
  Braces,
  Bot,
  Plug,
  Workflow,
  Table,
  Terminal,
  Layers,
} from 'lucide-react';

const techCategories = [
  {
    title: 'Языки и backend',
    techs: [
      { name: 'Python (Pandas, NumPy, GeoPandas)', icon: FileCode },
      { name: 'Node.js', icon: Server },
      { name: 'TypeScript', icon: Code2 },
      { name: 'SQL', icon: Table },
    ],
  },
  {
    title: 'Frontend',
    techs: [
      { name: 'React', icon: Code2 },
      { name: 'Vue.js', icon: Layers },
      { name: 'Next.js', icon: Zap },
      { name: 'Vite', icon: Zap },
      { name: 'Интерактивные веб-приложения и дашборды', icon: LayoutDashboard },
    ],
  },
  {
    title: 'Базы данных',
    techs: [
      { name: 'PostgreSQL', icon: Database },
      { name: 'MySQL', icon: Database },
      { name: 'MongoDB', icon: Database },
      { name: 'Redis', icon: Database },
      { name: 'Векторные БД: Qdrant, pgvector, Weaviate', icon: Database },
    ],
  },
  {
    title: 'ИИ и ML',
    techs: [
      { name: 'LLM (Claude, GPT, локальные модели)', icon: Sparkles },
      { name: 'RAG-системы', icon: Cpu },
      { name: 'ИИ-агенты', icon: Bot },
      { name: 'LangChain', icon: Workflow },
      { name: 'PyTorch', icon: Brain },
      { name: 'Transformers (Hugging Face)', icon: Brain },
    ],
  },
  {
    title: 'Интеграции и workflow',
    techs: [
      { name: 'REST API', icon: Plug },
      { name: 'GraphQL', icon: Braces },
      { name: 'WebSocket', icon: Radio },
      { name: 'Брокеры сообщений (RabbitMQ и др.)', icon: Inbox },
      { name: 'FastAPI', icon: FileCode },
      { name: 'n8n', icon: Workflow },
    ],
  },
  {
    title: 'Визуализация данных',
    techs: [
      { name: 'Apache Superset', icon: ChartColumn },
      { name: 'Grafana', icon: Activity },
      { name: 'Кастомные веб-дашборды', icon: LayoutDashboard },
    ],
  },
  {
    title: 'Инфраструктура',
    techs: [
      { name: 'Docker', icon: Box },
      { name: 'Linux-серверы', icon: Terminal },
      { name: 'Облачные платформы (AWS и др.)', icon: Cloud },
      { name: 'On‑premise развёртывание', icon: Server },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section className="relative overflow-hidden border-y border-ifi-border/80 bg-mineshaft-900 py-24 md:py-28 px-4">
      {/* Плотный фон — иначе сквозь полупрозрачность проступает глобальный AuthPageBackground (SVG «объект»). */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_0%,rgba(224,237,52,0.06),transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-ifi-lime/70" />
            <span className="font-mono text-sm uppercase tracking-[0.18em] text-ifi-lime">Стек</span>
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-ifi-lime/70" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{
                duration: 0.45,
                delay: catIndex * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -2 }}
              className="group relative rounded-2xl border border-ifi-border bg-mineshaft-900/70 p-6 shadow-sm backdrop-blur-sm transition-all hover:border-mineshaft-600 hover:shadow-md"
            >
              <div className="relative mb-5">
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-ifi-fg">
                  {category.title}
                </h3>
                <div className="h-1 w-14 rounded-full bg-gradient-to-r from-ifi-lime to-ifi-lime/50" />
              </div>

              <div className="space-y-2">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-3 rounded-xl border border-ifi-border bg-mineshaft-900/50 p-3 transition-all duration-200 hover:border-ifi-lime/25 hover:bg-mineshaft-800/70"
                  >
                    <tech.icon className="h-5 w-5 shrink-0 text-ifi-lime/90" />
                    <span className="flex-1 font-mono text-sm text-mineshaft-300">{tech.name}</span>
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-ifi-lime shadow-[0_0_8px_rgba(224,237,52,0.45)]" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-ifi-border bg-mineshaft-900/80 px-6 py-3 shadow-sm backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-ifi-lime shadow-[0_0_10px_rgba(224,237,52,0.5)]" />
            <span className="font-mono text-sm text-mineshaft-400">
              Прагматичный выбор технологий под нагрузку и команду заказчика
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
