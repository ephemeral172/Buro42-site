import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Database, Wand2, FileSearch, TrendingUp, Zap, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function SEOMagicSection() {
  const [expanded, setExpanded] = useState(false);

  const keyFeatures = [
    { icon: FileSearch, text: 'Автоматический анализ SERP и конкурентов', color: 'text-purple-500' },
    { icon: Wand2, text: 'AI-генерация SEO-структуры и контента', color: 'text-pink-500' },
    { icon: Database, text: 'Управляемый пайплайн с фиксацией состояний', color: 'text-blue-500' },
    { icon: CheckCircle, text: 'Возможность регенерации любого элемента', color: 'text-green-500' },
  ];

  const techStack = [
    { label: 'Frontend', value: 'React + Vite', color: 'from-blue-500 to-cyan-500' },
    { label: 'AI Orchestration', value: 'n8n', color: 'from-purple-500 to-pink-500' },
    { label: 'Backend', value: 'Supabase + PostgreSQL', color: 'from-green-500 to-emerald-500' },
    { label: 'AI Models', value: 'Gemini via OpenRouter', color: 'from-orange-500 to-red-500' },
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
    <section className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />

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
              <Sparkles className="w-6 h-6 text-purple-500" />
              <span className="text-purple-500 font-mono text-sm tracking-wider">CASE_02</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
                SEO Fair AI
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              AI-платформа для промышленной генерации SEO-контента
            </p>
          </motion.div>

          {/* Key features */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] border-2 border-purple-500/20 rounded-lg p-5 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <span className="text-gray-300">{feature.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500" />
              Технологический стек
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {techStack.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a1a] border border-purple-500/20 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 text-sm font-mono">{item.label}</span>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                  </div>
                  <div className={`text-base font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Expandable details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-purple-500/30 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpanded(!expanded)}
                className="w-full p-6 flex items-center justify-between text-left group hover:bg-purple-500/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-purple-500" />
                  <span className="text-xl font-bold text-white">Подробнее о реализации</span>
                </div>
                <div className="text-purple-500">
                  {expanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </div>
              </button>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t-2 border-purple-500/30"
                  >
                    <div className="p-6 space-y-6">
                      {/* Architecture */}
                      <div>
                        <h4 className="text-purple-500 font-semibold mb-3 flex items-center gap-2">
                          <Database className="w-4 h-4" /> Архитектура
                        </h4>
                        <ul className="space-y-2">
                          {expandedDetails.architecture.map((item, i) => (
                            <li key={i} className="text-gray-300 flex items-start gap-2">
                              <span className="text-purple-500 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Workflow */}
                      <div>
                        <h4 className="text-purple-500 font-semibold mb-3 flex items-center gap-2">
                          <Wand2 className="w-4 h-4" /> Рабочий процесс
                        </h4>
                        <ul className="space-y-2">
                          {expandedDetails.workflow.map((item, i) => (
                            <li key={i} className="text-gray-300 flex items-start gap-2">
                              <span className="text-purple-500 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="text-purple-500 font-semibold mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" /> Результаты
                        </h4>
                        <ul className="space-y-2">
                          {expandedDetails.results.map((item, i) => (
                            <li key={i} className="text-gray-300 flex items-start gap-2">
                              <span className="text-purple-500 mt-1">•</span>
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

          {/* Bottom emphasis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-purple-500 font-mono text-sm">
                Управляемый и воспроизводимый AI без "черного ящика"
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}