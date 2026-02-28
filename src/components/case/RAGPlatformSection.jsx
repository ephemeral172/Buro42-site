import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Database, Server, Shield, Zap, TrendingUp, ChevronDown, ChevronUp, Target, Cpu, Network, Workflow, Share2 } from 'lucide-react';

export default function RAGPlatformSection() {
  const [expanded, setExpanded] = useState(false);

  const keyFeatures = [
    { icon: Brain, text: 'Контекстное reasoning вместо fine-tuning', color: 'text-blue-500' },
    { icon: Database, text: 'Векторные БД (Qdrant/Chroma) и семантический поиск', color: 'text-cyan-500' },
    { icon: Workflow, text: 'Асинхронная обработка через RabbitMQ', color: 'text-indigo-500' },
    { icon: Shield, text: 'Полный контроль над данными (On-prem/Private Cloud)', color: 'text-emerald-500' },
  ];

  const techStack = [
    { label: 'AI / ML', value: 'Claude Opus, Gemini 3, GPT 5.2 Pro, Llama 3.1, Mistral Large', color: 'from-blue-500 to-indigo-500' },
    { label: 'Vector Storage', value: 'Qdrant / ChromaDB / PGVector', color: 'from-cyan-500 to-blue-500' },
    { label: 'Message Broker', value: 'RabbitMQ (Celery/Aio-pika)', color: 'from-orange-500 to-red-500' },
    { label: 'Infrastructure', value: 'FastAPI, Docker, Kubernetes', color: 'from-emerald-500 to-teal-500' },
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
    <section className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Background effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

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
              <Cpu className="w-6 h-6 text-blue-500" />
              <span className="text-blue-500 font-mono text-sm tracking-wider">CASE_03</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500">
                Корпоративная RAG-платформа
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl">
              Масштабируемая AI-система анализа отзывов и корпоративных данных на базе современных LLM. 
              Использование RAG-архитектуры позволяет системе рассуждать на основе актуальных знаний без дорогостоящего fine-tuning.
            </p>
          </motion.div>

          {/* Key features */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] border-2 border-blue-500/20 rounded-lg p-5 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500" />
              Технологический стек
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {techStack.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a0a] border border-blue-500/20 rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 text-sm font-mono">{item.label}</span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
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
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-[#0a0a0a] border-2 border-blue-500/30 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpanded(!expanded)}
                className="w-full p-6 flex items-center justify-between text-left group hover:bg-blue-500/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-blue-500" />
                  <span className="text-xl font-bold text-white">Архитектура и реализация</span>
                </div>
                <div className="text-blue-500">
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
                    className="border-t-2 border-blue-500/30"
                  >
                    <div className="p-6 space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Problem */}
                        <div>
                          <h4 className="text-blue-500 font-semibold mb-3 flex items-center gap-2">
                            <Target className="w-4 h-4" /> Вызовы
                          </h4>
                          <ul className="space-y-2">
                            {expandedDetails.problem.map((item, i) => (
                              <li key={i} className="text-gray-300 flex items-start gap-2">
                                <span className="text-blue-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Solution */}
                        <div>
                          <h4 className="text-blue-500 font-semibold mb-3 flex items-center gap-2">
                            <Server className="w-4 h-4" /> Техническая реализация
                          </h4>
                          <ul className="space-y-2">
                            {expandedDetails.solution.map((item, i) => (
                              <li key={i} className="text-gray-300 flex items-start gap-2">
                                <span className="text-blue-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="text-blue-500 font-semibold mb-4 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" /> Бизнес-эффект
                        </h4>
                        <div className="grid sm:grid-cols-3 gap-4">
                          {expandedDetails.results.map((result, i) => (
                            <div key={i} className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                              <p className="text-xs text-blue-500 mb-1 font-mono uppercase tracking-wider">{result.label}</p>
                              <p className="text-2xl font-bold text-white mb-1">{result.value}</p>
                              <p className="text-xs text-gray-400">{result.desc}</p>
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

          {/* Bottom highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 relative border-l-4 border-blue-500 bg-gradient-to-r from-blue-500/10 to-transparent p-6 rounded-r"
          >
            <p className="text-gray-300 leading-relaxed">
              Вместо обучения модели — <span className="text-blue-500 font-semibold">обучение архитектуры</span>. 
              Использование <span className="text-blue-400">RabbitMQ</span> для очередей и <span className="text-blue-400">Qdrant</span> для векторного поиска обеспечивает горизонтальное масштабирование и отказоустойчивость системы.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
