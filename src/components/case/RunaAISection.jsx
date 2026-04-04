import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Image as ImageIcon, Video, CreditCard, Shield, Layers, Workflow } from 'lucide-react';

const features = [
  { icon: MessageSquare, text: 'Генерация текста', color: 'text-cyan-500' },
  { icon: ImageIcon, text: 'Генерация изображений', color: 'text-blue-500' },
  { icon: Video, text: 'Генерация видео', color: 'text-purple-500' },
  { icon: CreditCard, text: 'Интегрированные платежи', color: 'text-ifi-lime-ink' },
  { icon: Shield, text: 'Безопасность и роли', color: 'text-orange-500' },
  { icon: Workflow, text: 'Асинхронная обработка', color: 'text-pink-500' },
];

export default function RunaAISection() {
  return (
    <section className="relative py-24 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Telegram-inspired geometric shapes */}
        <div className="pointer-events-none absolute left-10 top-20 h-32 w-32 rotate-45 rounded-sm border-2 border-cyan-500/20" />
        <div className="pointer-events-none absolute bottom-20 right-10 h-40 w-40 rotate-12 rounded-full border-2 border-mineshaft-600/80" />

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
              <MessageSquare className="w-6 h-6 text-cyan-600" />
              <span className="text-cyan-600 font-mono text-xs uppercase tracking-[0.2em]">Кейс</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-3 tracking-tight text-ifi-fg">RUNA AI</h2>
            <p className="text-xl text-mineshaft-400 font-mono">Генерация контента</p>
            <div className="mt-6 inline-block">
              <div className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 shadow-sm">
                <MessageSquare className="w-4 h-4" />
                Telegram Mini App
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12"
          >
            <div className="rounded-2xl border border-ifi-border bg-gradient-to-b from-mineshaft-800/40 to-mineshaft-900/80 p-6 shadow-[0_-20px_56px_-18px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-8">
              <p className="mb-4 leading-relaxed text-mineshaft-300">
                Telegram-бот с веб-интерфейсом (MiniApp) для генерации AI-контента: текста, изображений и видео.
                Пользователи взаимодействуют через бота или веб-приложение, выбирают модели, отправляют промпты и получают результаты.
                Система маршрутизирует запросы к внешним провайдерам (OpenAI, Anthropic, Google, Replicate, Midjourney и др.), учитывает лимиты и стоимость.
              </p>
              <div className="space-y-2 text-sm text-mineshaft-400">
                <p><span className="font-semibold text-cyan-400/95">Бот (Telegram):</span> На aiogram v3, обрабатывает команды, FSM на Redis, throttling (2 rps), идемпотентность. Поддерживает потоковые ответы, вложения до 20 МБ.</p>
                <p><span className="font-semibold text-cyan-400/95">API (Backend):</span> FastAPI для CRUD операций, маршрутизации запросов к провайдерам, S3 presign для загрузки файлов. Валидирует WebApp initData для авторизации.</p>
                <p><span className="font-semibold text-cyan-400/95">MiniApp (Frontend):</span> Next.js 15 для управления настройками, просмотра диалогов и генерации контента.</p>
                <p><span className="font-semibold text-cyan-400/95">База данных:</span> Tortoise ORM с PostgreSQL (prod) или SQLite (dev). Миграции через Aerich.</p>
                <p><span className="font-semibold text-cyan-400/95">Очереди:</span> RabbitMQ (aio-pika) для асинхронных задач, таких как cleanup storage (удаление старых файлов S3).</p>
                <p><span className="font-semibold text-cyan-400/95">Хранилище:</span> S3 (MinIO для dev) для вложений, с ретенцией 30 дней (видео — 7 дней). Presign URLs для загрузки/скачивания.</p>
              </div>
            </div>
          </motion.div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="group relative"
              >
                <div className="relative rounded-2xl border border-ifi-border bg-mineshaft-900/50 p-6 transition-all duration-300 hover:border-ifi-lime/20 hover:shadow-lg hover:shadow-black/25">
                  <div className="mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 ring-1 ring-cyan-400/15 transition-transform duration-300 group-hover:scale-[1.02]">
                      <feature.icon className={`w-7 h-7 ${feature.color}`} />
                    </div>
                  </div>

                  <p className="text-ifi-fg font-medium">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-ifi-border bg-gradient-to-b from-mineshaft-800/45 to-mineshaft-900/90 p-8 shadow-[0_-24px_64px_-20px_rgba(0,0,0,0.4)] backdrop-blur-sm">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_0%_0%,rgba(99,176,189,0.07),transparent_55%)]"
                aria-hidden
              />
              <div className="relative flex items-start gap-4">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ifi-lime/10 ring-1 ring-ifi-lime/20">
                  <Layers className="h-6 w-6 text-ifi-lime" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold tracking-tight text-ifi-fg">
                    Архитектура корпоративного уровня
                  </h3>
                  <p className="mb-4 leading-relaxed text-mineshaft-400">
                    Реализованы платежи, безопасность, роли доступа. Очередь задач и асинхронная обработка через
                    брокер сообщений.
                  </p>
                  <div className="inline-flex items-center gap-2 rounded-full border border-ifi-lime/25 bg-mineshaft-900/65 px-4 py-2">
                    <div className="h-2 w-2 rounded-full bg-ifi-lime shadow-[0_0_10px_rgba(224,237,52,0.4)]" />
                    <span className="font-mono text-sm text-mineshaft-200">
                      Готово к коммерческому использованию
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}