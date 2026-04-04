import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedLimeDot } from '@/components/landing/AnimatedLimeDot';
function PillarPanel({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.45 }}
      whileHover={{ boxShadow: '0 -28px 72px -18px rgba(0,0,0,0.38)' }}
      className="overflow-hidden rounded-md border border-ifi-border bg-gradient-to-b from-mineshaft-800/55 to-mineshaft-900/85 shadow-[0_-32px_80px_-20px_rgba(0,0,0,0.35)]"
    >
      <ul className="divide-y divide-ifi-border/40 p-5 md:p-8">
        {items.map((item, j) => (
          <motion.li
            key={item.label}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.38, delay: j * 0.06, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ x: 2, transition: { type: 'spring', stiffness: 400, damping: 28 } }}
            className="group/dot flex gap-4 py-4 first:pt-0 last:pb-0 md:py-5 md:first:pt-0 md:last:pb-0"
          >
            <AnimatedLimeDot index={j} className="mt-0.5" />
            <div className="min-w-0">
              <p className="font-medium leading-snug text-ifi-fg transition-colors duration-200 group-hover/dot:text-ifi-lime/95">
                {item.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-mineshaft-400 transition-colors duration-200 group-hover/dot:text-mineshaft-300">
                {item.detail}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

const blocks = [
  {
    id: 'ai',
    title: 'AI и машинное обучение',
    body: 'LLM, RAG и прикладной ML в промышленном контуре: качество ответов, версии промптов, наблюдаемость и контроль стоимости вызовов.',
    learn: '#cases',
    learnLabel: 'Смотреть кейсы',
    panelItems: [
      {
        label: 'LLM и RAG в проде',
        detail: 'Версионирование промптов, кэширование, offline-оценки и защита от утечек в ответах.',
      },
      {
        label: 'Наблюдаемость и стоимость',
        detail: 'Трейсинг запросов, квоты, разбор всплесков и прозрачный учёт токенов по сервисам.',
      },
      {
        label: 'Контур данных и ИБ',
        detail: 'Изоляция индексов, политики доступа, аудит и согласование с вашим регламентом.',
      },
    ],
  },
  {
    id: 'data',
    title: 'Данные и Big Data',
    body: 'Пайплайны и хранилища: от неструктурированных массивов до поиска, аналитики и сервисов с предсказуемыми SLA.',
    learn: '#cases',
    try: '#contact',
    learnLabel: 'Примеры',
    tryLabel: 'Обсудить архитектуру',
    panelItems: [
      {
        label: 'Пайплайны и качество данных',
        detail: 'ETL/ELT, контракты схем, мониторинг свежести и контроль аномалий в потоках.',
      },
      {
        label: 'Хранилище под нагрузку',
        detail: 'Lakehouse, партиционирование, tiering и резервирование под ваши объёмы и запросы.',
      },
      {
        label: 'SLA для потребителей',
        detail: 'API к датасетам, очереди, лимиты и понятные SLO на выдачу и интерактивную аналитику.',
      },
    ],
  },
  {
    id: 'sec',
    title: 'Интеграции и доступ',
    body: 'Встраивание в ваш ландшафт: API, SSO, on‑prem и облако, роли, аудит и требования информационной безопасности.',
    learn: '#integrations',
    try: '#contact',
    learnLabel: 'Интеграции',
    tryLabel: 'Связаться',
    panelItems: [
      {
        label: 'API и события',
        detail: 'REST/gRPC, вебхуки и шины сообщений — без «единой точки отказа» в обмене.',
      },
      {
        label: 'Идентичность и роли',
        detail: 'SSO, RBAC, делегирование и согласование с корпоративным IAM.',
      },
      {
        label: 'Аудит и соответствие',
        detail: 'Журналы доступа, трассировка действий и артефакты для проверок ИБ и внутреннего контроля.',
      },
    ],
  },
];

export default function ProductPillars() {
  return (
    <section id="platform" className="scroll-mt-20">
      {blocks.map((block, index) => (
        <motion.div
          key={block.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: 0.45 }}
          className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center md:gap-16 md:py-24 lg:gap-20"
        >
          <div className={index % 2 === 1 ? 'md:order-2' : ''}>
            <h2 className="text-3xl font-semibold tracking-tight text-ifi-fg md:text-4xl">{block.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-mineshaft-400">{block.body}</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href={block.learn}
                className="group inline-flex items-center gap-1 text-sm font-semibold text-ifi-lime hover:text-[#ecf26d]"
              >
                {block.learnLabel}
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              {block.try ? (
                <a
                  href={block.try}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-ifi-fg underline decoration-mineshaft-600 underline-offset-4 hover:decoration-ifi-fg"
                >
                  {block.tryLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>
          <div className={index % 2 === 1 ? 'md:order-1' : ''}>
            <PillarPanel items={block.panelItems} />
          </div>
        </motion.div>
      ))}
    </section>
  );
}
