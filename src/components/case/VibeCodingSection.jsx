import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Shield, TrendingUp, Code } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Быстрая проверка идей',
    description: 'Используем подход Vibe Coding для быстрой проверки идей и гипотез.',
  },
  {
    icon: Clock,
    title: 'Часы, не недели',
    description: 'Это позволяет запускать рабочие приложения за часы, а не недели.',
  },
  {
    icon: Code,
    title: 'ИИ как ускоритель',
    description: 'ИИ применяется для ускорения написания кода и генерации решений.',
  },
  {
    icon: Shield,
    title: 'Полный контроль',
    description: 'Архитектура, логика безопасности и критические части всегда под нашим контролем.',
  },
];

export default function VibeCodingSection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#121212]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500" />
            <span className="text-orange-500 font-mono text-sm tracking-wider">METHODOLOGY</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500" />
          </div>
          <p className="text-2xl text-orange-500 font-mono">VIBE CODING</p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-orange-500/5 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              {/* Card */}
              <div className="relative h-full bg-[#1a1a1a] border border-orange-500/30 rounded-lg p-6 overflow-hidden group-hover:border-orange-500 transition-all duration-300">
                {/* Top accent line */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-orange-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />

                {/* Icon */}
                <div className="mb-4 relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  {/* Pulsing effect */}
                  <motion.div
                    className="absolute inset-0 w-12 h-12 rounded-lg bg-orange-500/30"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>

                {/* Corner decorations */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-orange-500/20 group-hover:border-orange-500/50 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500 rounded-lg px-8 py-4">
            <p className="text-orange-500 font-mono text-sm mb-1">РЕЗУЛЬТАТ</p>
            <p className="text-white text-lg font-semibold">
              Быстрый запуск качественных продуктов
            </p>
          </div>
        </motion.div>
      </div>

      {/* Animated background circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-orange-500/10"
          style={{
            width: 200 + i * 150,
            height: 200 + i * 150,
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 20 + i * 10, repeat: Infinity, ease: 'linear' },
            scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      ))}
    </section>
  );
}