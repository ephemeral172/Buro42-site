import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export default function RAGPlatformSection() {
  const [expanded, setExpanded] = useState(false);

  const keyFeatures = [
    { icon: Brain, text: 'Контекстное reasoning вместо fine-tuning', color: 'text-blue-500' },
    { icon: Database, text: 'Векторные БД (Qdrant/Weaviate) и семантический поиск', color: 'text-cyan-500' },
    { icon: Workflow, text: 'Асинхронная обработка через RabbitMQ', color: 'text-indigo-500' },
    { icon: Shield, text: 'Полный контроль над данными (On-prem/Private Cloud)', color: 'text-ifi-lime' },
  ];

  const techStack = [
    { label: 'AI / ML', value: 'Claude Opus, Gemini 3, GPT 5.2 Pro, Llama 3.1, Mistral Large', color: 'from-blue-500 to-indigo-500' },
    { label: 'Vector Storage', value: 'Qdrant / Weaviate / PGVector', color: 'from-cyan-500 to-blue-500' },
    { label: 'Message Broker', value: 'RabbitMQ (Celery/Aio-pika)', color: 'from-orange-500 to-red-500' },
    { label: 'Infrastructure', value: 'FastAPI, Docker', color: 'from-ifi-lime to-ifi-info' },
  ];

  const expandedDetails = {
    problem: [
      'Высокая стоимость GPU-инфраструктуры при классическом fine-tuning',
      'Сложность поддержки и обновлений обученных моделей (необходимость переобучения при смене данных)',
      'Слабая адаптация к изменяющимся бизнес-правилам и "галлюцинации" моделей',
      'Зависимость от вендоров (Vendor lock-in) и риски безопасности данных',
    ],
    solution: [
      'Разделение на слои: Reasoning (LLM), Knowledge (Vector DB), Orchestration (RabbitMQ)',
      'Semantic Chunking: умное разбиение документов для сохранения контекста',
      'Hybrid Search: сочетание векторного и полнотекстового поиска для максимальной точности',
      'Асинхронный пайплайн обработки тяжелых документов через брокеры сообщений',
      'Гибкая система промпт-сценариев с версионированием логики',
    ],
    results: [
      { label: 'Экономия', value: '33%', desc: 'Снижение годовой стоимости владения' },
      { label: 'Адаптация', value: 'Мгновенно', desc: 'Обновление логики без переобучения' },
      { label: 'Масштаб', value: '1000+', desc: 'Анализ отзывов и документов в сутки' },
    ],
  };

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
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ifi-lime">Кейс</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-ifi-fg lg:text-5xl">
            Корпоративная RAG-платформа
          </h2>
          <p className="max-w-3xl text-lg text-mineshaft-400">
            Платформа для работы со структурированными и неструктурированными большими данными на базе ИИ — в одном
            масштабируемом корпоративном решении. RAG-архитектура позволяет опираться на актуальные знания и
            рассуждать в контексте ваших данных без дорогостоящего fine-tuning. Проект:{' '}
            <a
              href="https://axioma8.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ifi-lime underline decoration-ifi-lime/40 underline-offset-2 hover:decoration-ifi-lime"
            >
              axioma8.ru
            </a>
            .
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
            Сайт проекта
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
            Технологический стек
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
                <span className="text-xl font-bold text-ifi-fg">Архитектура и реализация</span>
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
                          <Target className="h-4 w-4 text-ifi-lime" /> Вызовы
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
                          <Server className="h-4 w-4 text-ifi-lime" /> Техническая реализация
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
                        <TrendingUp className="h-4 w-4 text-ifi-lime" /> Бизнес-эффект
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
          <p className="relative leading-relaxed text-mineshaft-400">
            Вместо обучения модели —{' '}
            <span className="font-semibold text-ifi-fg">обучение архитектуры</span>. Использование{' '}
            <span className="text-cyan-400/95">RabbitMQ</span> для очередей и{' '}
            <span className="text-cyan-400/95">Qdrant</span> для векторного поиска обеспечивает горизонтальное
            масштабирование и отказоустойчивость системы.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
