import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Gamepad2, ExternalLink } from 'lucide-react';

const mockupImage = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695f88e273d15fac12966f07/16afb38f4_discount.png';

const features = [
  'Игровая механика (крестики-нолики)',
  'Выдача промокодов через вовлекающий сценарий',
  'SQL-база данных',
  'Frontend на Vite',
];

export default function DiscountBotSection() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Background effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />

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
              <Gift className="w-6 h-6 text-pink-500" />
              <span className="text-pink-500 font-mono text-sm tracking-wider">CASE_06</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600">
                Интерактивная выдача промокодов
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              Telegram Mini App с игровой механикой
            </p>
            <a
              href="https://t.me/birch_discount_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
            >
              <Gamepad2 className="w-5 h-5" />
              @birch_discount_bot
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <img
                src={mockupImage}
                alt="Discount Bot Screenshots"
                className="w-full max-w-2xl h-auto"
              />
            </motion.div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-500" />
                Особенности
              </h3>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] border border-pink-500/20 rounded-lg p-4 hover:border-pink-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {['Telegram', 'Game', 'SQL', 'Vite'].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-xs text-pink-500 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}