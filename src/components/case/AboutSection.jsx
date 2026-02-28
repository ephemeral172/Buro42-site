import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Rocket, Shield, Gauge } from 'lucide-react';

const features = [
  { icon: Rocket, text: 'Фулстак-разработчик с фокусом на AI-продукты и быстрый вывод решений в продакшен.' },
  { icon: Gauge, text: 'Специализируюсь на создании MVP и проверке продуктовых гипотез в сжатые сроки.' },
  { icon: Cpu, text: 'Использую AI как инструмент ускорения, сохраняя контроль над архитектурой и качеством кода.' },
  { icon: Shield, text: 'Бэкэнд проектирую и пишу вручную — с учетом нагрузки, безопасности и роста.' },
];

export default function AboutSection() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500" />
            <span className="text-orange-500 font-mono text-sm tracking-wider">ABOUT_ME</span>
          </div>
        </motion.div>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-orange-500/20 rounded-lg p-6 hover:border-orange-500/50 transition-all duration-300">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-orange-500/30 rounded-tr-lg" />
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -left-1 w-14 h-14 bg-orange-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                </div>

                {/* Text */}
                <p className="text-gray-300 leading-relaxed">
                  {feature.text}
                </p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/5 to-orange-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 relative"
        >
          <div className="bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent border-l-4 border-orange-500 p-6 rounded-r-lg">
            <p className="text-gray-300 text-lg leading-relaxed">
              Работаю с веб-приложениями, Telegram Mini Apps и AI-автоматизацией. 
              <span className="text-orange-500 font-semibold"> Ориентирован на результат и бизнес-ценность.</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
    </section>
  );
}