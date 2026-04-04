import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Database, Wand2, FileSearch, TrendingUp, Zap, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function SEOMagicSection() {
  const [expanded, setExpanded] = useState(false);

  const keyFeatures = [
    { icon: FileSearch, text: 'Автоматический анализ SERP и конкурентов', color: 'text-violet-600' },
    { icon: Wand2, text: 'AI-генерация SEO-структуры и контента', color: 'text-fuchsia-600' },
    { icon: Database, text: 'Управляемый пайплайн с фиксацией состояний', color: 'text-blue-600' },
    { icon: CheckCircle, text: 'Возможность регенерации любого элемента', color: 'text-ifi-lime-ink' },
  ];

  const techStack = [
    { label: 'Frontend', value: 'React + Vite', color: 'from-blue-600 to-cyan-500' },
    { label: 'AI Orchestration', value: 'n8n', color: 'from-violet-600 to-fuchsia-500' },
    { label: 'Backend', value: 'Supabase + PostgreSQL', color: 'from-ifi-lime-ink to-ifi-info' },
    { label: 'AI Models', value: 'Gemini via OpenRouter', color: 'from-amber-600 to-orange-500' },
  ];

  const expandedDetails = {
    architecture: [
      'Разделение на 3 независимых слоя: Frontend, AI Orchestration, Backend',
      'State-machine задач с явными состояниями переходов',
      'Пошаговая генерация с возможностью вмешательства на каждом этапе',
    ],
    workflow: [
      'Анализ SERP через PixelPlus → парсинг конкурентов → генерация структуры → написание текста',
      'Каждый шаг сохраняется в БД, возможна частичная регенерация. Polling статусов задач через TanStack Query',
    ],
    results: [
      'Промышленная генерация SEO-контента без "черного ящика"',
      'Полный контроль над процессом на каждом этапе',
      'Масштабируемость без переписывания архитектуры',
    ],
  };

  return (
    <section className="relative px-4 py-20 md:py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-4">
            <Sparkles className="h-6 w-6 text-ifi-lime" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ifi-lime">Кейс</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-ifi-fg lg:text-5xl">SEO Fair AI</h2>
          <p className="text-lg text-mineshaft-400">AI-платформа для промышленной генерации SEO-контента</p>
        </motion.div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          {keyFeatures.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-ifi-border bg-mineshaft-900/55 p-5 backdrop-blur-sm transition-all hover:border-ifi-lime/20 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ifi-lime/12 ring-1 ring-ifi-lime/25 transition-transform duration-300 group-hover:scale-105">
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
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <h3 className="mb-4 flex items-center gap-2 text-xl font-bold tracking-tight text-ifi-fg">
            <div className="h-6 w-1 rounded-full bg-gradient-to-b from-ifi-lime to-ifi-lime/40" />
            Технологический стек
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-ifi-border bg-mineshaft-900/50 p-4 shadow-sm transition-all hover:border-ifi-lime/25"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-sm text-mineshaft-400">{item.label}</span>
                  <div className="h-2 w-2 rounded-full bg-ifi-lime shadow-[0_0_8px_rgba(224,237,52,0.4)]" />
                </div>
                <div className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="overflow-hidden rounded-2xl border border-ifi-border bg-mineshaft-900/60 shadow-sm backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="group flex w-full items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-mineshaft-800/60"
            >
              <div className="flex items-center gap-3">
                <Zap className="h-6 w-6 text-ifi-lime" />
                <span className="text-xl font-bold text-ifi-fg">Подробнее о реализации</span>
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
                  <div className="space-y-6 p-6">
                    <div>
                      <h4 className="mb-3 flex items-center gap-2 font-semibold text-ifi-fg">
                        <Database className="h-4 w-4 text-ifi-lime" /> Архитектура
                      </h4>
                      <ul className="space-y-2">
                        {expandedDetails.architecture.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-mineshaft-400">
                            <span className="mt-1 text-ifi-lime">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 flex items-center gap-2 font-semibold text-ifi-fg">
                        <Wand2 className="h-4 w-4 text-ifi-lime" /> Рабочий процесс
                      </h4>
                      <ul className="space-y-2">
                        {expandedDetails.workflow.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-mineshaft-400">
                            <span className="mt-1 text-ifi-lime">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 flex items-center gap-2 font-semibold text-ifi-fg">
                        <TrendingUp className="h-4 w-4 text-ifi-lime" /> Результаты
                      </h4>
                      <ul className="space-y-2">
                        {expandedDetails.results.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-mineshaft-400">
                            <span className="mt-1 text-ifi-lime">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-ifi-border bg-mineshaft-900/75 px-6 py-3 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-ifi-lime shadow-[0_0_10px_rgba(224,237,52,0.45)]" />
            <span className="font-mono text-sm text-mineshaft-400">
              Управляемый и воспроизводимый AI без «черного ящика»
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
