import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Monitor,
  Layers,
  FileSearch,
  LayoutDashboard,
  Bell,
  Lock,
  ExternalLink,
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    text: 'Контроль Shadow AI: видимость вставок сотрудников в ChatGPT, Claude, Gemini и другие сервисы.',
    color: 'text-cyan-400',
  },
  {
    icon: Monitor,
    text: 'Расширение для браузера и облачный дашборд — запуск без агентов на серверах и долгого внедрения.',
    color: 'text-ifi-lime',
  },
  {
    icon: Lock,
    text: 'Анализ промптов и вложений локально в расширении: конфиденциальные данные не уходят на сервер для разбора текста.',
    color: 'text-sky-400',
  },
  {
    icon: Layers,
    text: 'Многоуровневая оценка риска: regex, кастомные правила, Presidio NER, LLM — до отправки запроса в AI.',
    color: 'text-violet-400',
  },
  {
    icon: FileSearch,
    text: 'Файлы и вложения: PDF, DOCX, код, изображения с OCR — извлечение текста на устройстве пользователя.',
    color: 'text-amber-400',
  },
  {
    icon: Bell,
    text: 'Политики flag / warn / block и оповещения (Telegram, webhook, email) по событиям высокого риска.',
    color: 'text-rose-400',
  },
];

const techStack = [
  {
    label: 'Клиент',
    value: 'Браузерное расширение (Chrome, Edge, Yandex)',
    color: 'from-ifi-lime to-cyan-500',
  },
  {
    label: 'Классификация',
    value: 'Regex, правила, Presidio NER, LLM',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    label: 'Консоль',
    value: 'Дашборд, поток событий (SSE), отчёты',
    color: 'from-violet-500 to-fuchsia-600',
  },
  {
    label: 'Интеграции',
    value: 'Telegram, Webhook, Email',
    color: 'from-amber-500 to-orange-500',
  },
];

export default function ShadowGPTSection() {
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
            <LayoutDashboard className="h-6 w-6 text-ifi-lime" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ifi-lime">Кейс</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-ifi-fg lg:text-5xl">ShadowGPT</h2>
          <p className="max-w-3xl text-lg text-mineshaft-400">
            Защита компании от утечек через публичные AI-сервисы: мониторинг, классификация риска и политики до
            того, как конфиденциальные данные покинут периметр. Продукт доступен на{' '}
            <a
              href="https://shadowgpt.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ifi-lime underline decoration-ifi-lime/40 underline-offset-2 hover:decoration-ifi-lime"
            >
              shadowgpt.app
            </a>
            .
          </p>
          <motion.a
            href="https://shadowgpt.app"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-ifi-border bg-mineshaft-900/60 px-5 py-2.5 text-sm font-semibold text-ifi-fg backdrop-blur-sm transition-colors hover:border-ifi-lime/35 hover:bg-mineshaft-800/70"
          >
            Открыть продукт
            <ExternalLink className="h-4 w-4 text-ifi-lime" />
          </motion.a>
        </motion.div>

        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.text}
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
            Технологический стек
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
            <Shield className="inline h-4 w-4 text-ifi-lime" />
            Shadow AI Protection · политики и аудит без «чёрного ящика» у публичных LLM
          </p>
        </motion.div>
      </div>
    </section>
  );
}
