import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Shield, Code } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Быстрая проверка гипотез',
    description:
      'Итеративная разработка и AI-инструменты ускоряют пилоты при сохранении архитектурного контроля.',
  },
  {
    icon: Clock,
    title: 'Короткий цикл обратной связи',
    description:
      'Рабочие инкременты для согласования с бизнесом и ИБ — особенно важно в enterprise.',
  },
  {
    icon: Code,
    title: 'Современный стек',
    description:
      'Типизированные кодовые базы, автоматизация и воспроизводимые сборки для долгой эксплуатации.',
  },
  {
    icon: Shield,
    title: 'Контроль и качество',
    description:
      'Критичные участки, безопасность и соответствие требованиям заказчика — в фокусе на каждом этапе.',
  },
];

export default function VibeCodingSection() {
  return (
    <section className="relative py-24 md:py-28 px-4 bg-mineshaft-900/30">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-blue-600" />
            <span className="font-mono text-sm uppercase tracking-[0.18em] text-blue-600">
              Подход
            </span>
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-blue-600" />
          </div>
          <p className="text-2xl font-semibold text-ifi-fg tracking-tight">
            Скорость без потери дисциплины
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -2 }}
              className="relative group rounded-2xl border border-ifi-border bg-ifi-card p-6 shadow-sm transition-shadow hover:shadow-md hover:border-mineshaft-600"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-ifi-fg mb-2 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-mineshaft-400 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 max-w-2xl px-2 text-center"
        >
          <div className="relative overflow-hidden rounded-md border border-ifi-border bg-gradient-to-b from-mineshaft-800/55 to-mineshaft-900/90 px-8 py-6 shadow-[inset_0_1px_0_0_rgba(224,237,52,0.06),0_-24px_72px_-28px_rgba(0,0,0,0.45)]">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_50%_-10%,rgba(224,237,52,0.09),transparent_58%)]"
              aria-hidden
            />
            <p className="relative font-mono text-xs uppercase tracking-[0.18em] text-ifi-lime">Итог</p>
            <p className="relative mt-2 text-base font-semibold tracking-tight text-ifi-fg">
              Предсказуемые сроки пилотов и прозрачный путь к промышленному запуску
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
