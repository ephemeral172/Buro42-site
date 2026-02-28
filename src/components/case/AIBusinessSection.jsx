import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Briefcase, FileText, TrendingDown, Layers, ChevronDown, ChevronUp, Zap, Target, Clock } from 'lucide-react';

const cases = [
  {
    id: 1,
    title: 'Автоматизация SEO-контента',
    shortDesc: 'AI-воркфлоу для массовой генерации SEO-статей',
    icon: FileText,
    color: 'from-green-500 to-emerald-500',
    details: {
      problem: 'Медленное, дорогое создание SEO-контента. Требовалось вручную собирать ключевые слова, анализировать конкурентов, писать тексты.',
      solution: 'Полностью автоматизированный воркфлоу на n8n с AI-агентами: парсинг ТОП-10 конкурентов, генерация структуры, написание текста, гуманизация, HTML-разметка.',
      technologies: ['n8n', 'Google Gemini 2.5', 'PixelPlus API', 'Tavily API', 'Google Sheets/Docs', 'Supabase', 'Telegram'],
      results: [
        { label: 'Скорость', value: '↑ 70%', desc: 'Статья за 15-60 минут вместо 1-2 дней' },
        { label: 'Затраты', value: '↓ 60%', desc: 'Снижение расходов на копирайтинг' },
        { label: 'Объем', value: '×5', desc: 'Увеличение производства контента' },
      ],
    },
  },
  {
    id: 2,
    title: 'AI-продавец для WhatsApp',
    shortDesc: 'Автоматическая квалификация и обработка лидов',
    icon: Briefcase,
    color: 'from-blue-500 to-cyan-500',
    details: {
      problem: 'Высокая нагрузка на операторов, долгий отклик клиентам, неэффективная квалификация лидов, сложность масштабирования.',
      solution: 'AI-агент в WhatsApp ведет диалоги от имени реального аккаунта, квалифицирует лиды, отвечает на вопросы, собирает данные и передает "горячие" заявки менеджерам.',
      technologies: ['n8n', 'OpenRouter', 'Supabase', 'Google Sheets', 'WhatsApp API', 'AI-агенты с промптами'],
      results: [
        { label: 'Нагрузка', value: '↓ 80%', desc: 'Первичную обработку ведет AI' },
        { label: 'Отклик', value: '24/7', desc: 'Мгновенные ответы клиентам' },
        { label: 'Конверсия', value: '↑ 40%', desc: 'Квалифицированные лиды' },
      ],
    },
  },
];

export default function AIBusinessSection() {
  const [expandedCase, setExpandedCase] = useState(null);

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
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
              <Layers className="w-6 h-6 text-green-500" />
              <span className="text-green-500 font-mono text-sm tracking-wider">CASE_01</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500">
                Внедрение ИИ в бизнес-процессы
              </span>
            </h2>
          </motion.div>

          {/* Cases */}
          <div className="space-y-6">
            {cases.map((caseItem, index) => {
              const isExpanded = expandedCase === caseItem.id;
              const Icon = caseItem.icon;

              return (
                <motion.div
                  key={caseItem.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="bg-[#0a0a0a] border-2 border-green-500/30 rounded-lg overflow-hidden hover:border-green-500 transition-all duration-300">
                    {/* Header */}
                    <button
                      onClick={() => setExpandedCase(isExpanded ? null : caseItem.id)}
                      className="w-full p-6 flex items-center gap-4 text-left group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${caseItem.color} rounded flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{caseItem.title}</h3>
                        <p className="text-gray-400 text-sm">{caseItem.shortDesc}</p>
                      </div>
                      <div className="text-green-500">
                        {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                      </div>
                    </button>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t-2 border-green-500/30"
                        >
                          <div className="p-6 space-y-6">
                            {/* Problem */}
                            <div>
                              <h4 className="text-green-500 font-semibold mb-2 flex items-center gap-2">
                                <Target className="w-4 h-4" /> Проблема
                              </h4>
                              <p className="text-gray-300 leading-relaxed">{caseItem.details.problem}</p>
                            </div>

                            {/* Solution */}
                            <div>
                              <h4 className="text-green-500 font-semibold mb-2 flex items-center gap-2">
                                <Zap className="w-4 h-4" /> Решение
                              </h4>
                              <p className="text-gray-300 leading-relaxed">{caseItem.details.solution}</p>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h4 className="text-green-500 font-semibold mb-3">Технологии</h4>
                              <div className="flex flex-wrap gap-2">
                                {caseItem.details.technologies.map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-xs text-green-500 font-mono"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* n8n Workflow Screenshot */}
                            {caseItem.id === 1 && (
                              <div>
                                <h4 className="text-green-500 font-semibold mb-3">Воркфлоу n8n</h4>
                                <div className="bg-[#0a0a0a] border border-green-500/30 rounded-lg p-4 overflow-hidden">
                                  <img
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695f88e273d15fac12966f07/56bd15cf9_2026-01-10135647.png"
                                    alt="n8n Workflow - SEO Content"
                                    className="w-full h-auto rounded"
                                  />
                                </div>
                              </div>
                            )}

                            {caseItem.id === 2 && (
                              <div className="space-y-6">
                                <div>
                                  <h4 className="text-green-500 font-semibold mb-3">Воркфлоу n8n</h4>
                                  <div className="bg-[#0a0a0a] border border-green-500/30 rounded-lg p-4 overflow-hidden">
                                    <img
                                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695f88e273d15fac12966f07/60b299308_2026-01-10140123.png"
                                      alt="n8n Workflow - Telegram Bot"
                                      className="w-full h-auto rounded"
                                    />
                                  </div>
                                </div>
                                
                                <div>
                                  <h4 className="text-green-500 font-semibold mb-3">Скриншоты решения</h4>
                                  <div className="flex h-64 sm:h-80 md:h-96 gap-2 w-full">
                                    {[
                                      'https://i.postimg.cc/MGV3D6Dp/5790f4cd0efc466277a51256466678c4-942ee4d7-f4e2-440d-8b95-0e0e6a3603f3.jpg',
                                      'https://i.postimg.cc/qRrbDPbt/762862db091a958e7c37ae9edfe6fc50-e6f9bc20-0520-4115-a537-2ddf496f646a.jpg',
                                      'https://i.postimg.cc/50J7Kh73/d151bf2661b6409121f47587a03fd7fa-c05a72e8-34cc-42d0-a868-6d2f08e6908e.jpg'
                                    ].map((src, index) => (
                                      <div
                                        key={index}
                                        className="relative flex-1 hover:flex-[3] transition-all duration-500 ease-in-out overflow-hidden rounded-lg border border-green-500/30 cursor-pointer group"
                                      >
                                        <img
                                          src={src}
                                          alt={`Telegram Bot Screenshot ${index + 1}`}
                                          className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Results */}
                            <div>
                              <h4 className="text-green-500 font-semibold mb-3 flex items-center gap-2">
                                <TrendingDown className="w-4 h-4" /> Результаты
                              </h4>
                              <div className="grid sm:grid-cols-3 gap-4">
                                {caseItem.details.results.map((result, i) => (
                                  <div key={i} className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                                    <p className="text-xs text-green-500 mb-1">{result.label}</p>
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
              );
            })}
          </div>

          {/* Bottom highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 relative border-l-4 border-green-500 bg-gradient-to-r from-green-500/10 to-transparent p-6 rounded-r"
          >
            <p className="text-gray-300 leading-relaxed">
              Решения проектируются с учетом{' '}
              <span className="text-green-500 font-semibold">реального использования и масштабирования</span>, 
              а не как демо.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}