import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Camera, Droplet, Dumbbell, TrendingUp, Trophy, Smartphone, ExternalLink } from 'lucide-react';

const functionality = [
  { icon: Camera, text: 'подсчет калорий и БЖУ по фото' },
  { icon: Apple, text: 'дневник питания' },
  { icon: Droplet, text: 'учет воды и тренировок' },
  { icon: TrendingUp, text: 'анализ поведения пользователя' },
  { icon: Trophy, text: 'механики вовлечения и соревнований' },
];

const techStack = [
  { label: 'Frontend', value: 'Vite', color: 'from-blue-500 to-cyan-500' },
  { label: 'БД', value: 'Supabase', color: 'from-green-500 to-emerald-500' },
  { label: 'Логика', value: 'n8n + AI', color: 'from-purple-500 to-pink-500' },
  { label: 'Платформа', value: 'Telegram Mini App', color: 'from-blue-400 to-blue-600' },
];

const mockupImage = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695f88e273d15fac12966f07/6a44344ab_fit.png';

export default function NutritionAppSection() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Organic shapes background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />

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
              <Dumbbell className="w-6 h-6 text-green-500" />
              <span className="text-green-500 font-mono text-sm tracking-wider">CASE_04</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-cyan-500">
                AI-приложение контроля питания
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              AI-приложение для анализа питания и активности пользователя
            </p>
            <a
              href="https://t.me/Eva_fitbot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
            >
              <Smartphone className="w-5 h-5" />
              @Eva_fitbot
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex justify-center"
          >
            <img
              src={mockupImage}
              alt="Eva Fit Bot Screenshots"
              className="w-full max-w-2xl h-auto"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Functionality */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-blue-500" />
                Функциональность
              </h3>
              
              <div className="space-y-3">
                {functionality.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                    className="group"
                  >
                    <div className="bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] border border-green-500/20 rounded-lg p-4 hover:border-green-500/50 transition-all duration-300 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-5 h-5 text-green-500" />
                      </div>
                      <span className="text-gray-300">{item.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech implementation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500" />
                Техническая реализация
              </h3>
              
              <div className="space-y-4">
                {techStack.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                    className="relative"
                  >
                    <div className="bg-[#1a1a1a] border border-blue-500/20 rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-500 text-sm font-mono">{item.label}</span>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      </div>
                      <div className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}