import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ExternalLink, X, Zap } from 'lucide-react';

const websites = [
  { url: 'https://flower-heaven.vercel.app/', title: 'Flower Heaven', description: 'Лендинг цветочного магазина' },
  { url: 'https://smile-bright-five.vercel.app/', title: 'Smile Bright', description: 'Стоматологическая клиника' },
  { url: 'https://estel-beauty-glow.base44.app', title: 'Estel Beauty Glow', description: 'Лендинг салона красоты' },
  { url: 'https://emmanuel-beauty-salon.base44.app', title: 'Emmanuel Beauty Salon', description: 'Салон красоты' },
  { url: 'https://sweet-bake-art.base44.app/', title: 'Sweet Bake Art', description: 'Кондитерская' },
  { url: 'https://eight-lounge-vibes.base44.app/', title: 'Eight Lounge Vibes', description: 'Лаунж бар' },
  { url: 'https://iris-beauty-space.base44.app/', title: 'Iris Beauty Space', description: 'Бьюти пространство' },
  { url: 'https://soft-bloom-studio.base44.app/', title: 'Soft Bloom Studio', description: 'Цветочная студия' },
  { url: 'https://garmania-tela-spa.base44.app/', title: 'Garmania Tela Spa', description: 'Спа салон' },
  { url: 'https://beauty-masters-space.base44.app/', title: 'Beauty Masters Space', description: 'Пространство красоты' },
  { url: 'https://vard-blooms-here.base44.app/#hero', title: 'Vard Blooms Here', description: 'Цветочный магазин' },
  { url: 'https://tsveti-fresh-now.base44.app/', title: 'Tsveti Fresh Now', description: 'Доставка цветов' },
  { url: 'https://app-6bfaeb25.base44.app/', title: 'App 6bfaeb25', description: 'Лендинг приложения' },
  { url: 'https://app-c14d6bb5.base44.app/#categories', title: 'App c14d6bb5', description: 'Лендинг приложения' },
  { url: 'https://blue-flowers-704aa59c.base44.app/', title: 'Blue Flowers', description: 'Цветочный магазин' },
  { url: 'https://layan-beauty-glow.base44.app/', title: 'Layan Beauty Glow', description: 'Салон красоты' },
  { url: 'https://l-studio-space.base44.app/', title: 'L Studio Space', description: 'Студия красоты' },
  { url: 'https://ks-tattoo-studio.base44.app/', title: 'KS Tattoo Studio', description: 'Тату студия' },
  { url: 'https://grande-flower-studio.base44.app/', title: 'Grande Flower Studio', description: 'Студия флористики' },
  { url: 'https://belucci-smile-care.base44.app/', title: 'Belucci Smile Care', description: 'Стоматология' },
  { url: 'https://lounge-1805-vibes.base44.app/', title: 'Lounge 1805 Vibes', description: 'Лаунж бар' },
  { url: 'https://beauty-care-style.base44.app/', title: 'Beauty Care Style', description: 'Салон красоты' },
  { url: 'https://gars-style-cut.base44.app/', title: 'Gars Style Cut', description: 'Барбершоп' },
  { url: 'https://solo-style-studio.base44.app/', title: 'Solo Style Studio', description: 'Студия стиля' },
  { url: 'https://daler-dental-care.base44.app/', title: 'Daler Dental Care', description: 'Стоматологическая клиника' },
  { url: 'https://gym-stretch-fit.base44.app', title: 'Gym Stretch Fit', description: 'Фитнес студия' }
];


export default function LandingsSection() {
  const [selectedWebsite, setSelectedWebsite] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedWebsites = isExpanded ? websites : websites.slice(0, 6);

  return (
    <section className="relative py-32 px-4 mb-20">
      <div className="max-w-6xl mx-auto">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red-500/10 to-orange-500/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12">

            <div className="flex items-center gap-4 mb-4">
              <Code className="w-6 h-6 text-orange-500" />
              <span className="text-orange-500 font-mono text-sm tracking-wider">CASE_07</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600">
                Фронтенд и лендинги
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Производительные лендинги с упором на скорость и чистую архитектуру
            </p>
          </motion.div>

          {/* Websites grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <AnimatePresence mode="popLayout">
              {displayedWebsites.map((website, index) =>
              <motion.div
                key={website.url}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index < 6 ? index * 0.1 : (index % 3) * 0.1 }}
                className="group relative">

                <div className="relative h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-600/5 to-red-600/5 blur-3xl group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Iframe Preview */}
                  <div className="relative h-48 mb-6 rounded-xl overflow-hidden border border-orange-500/20 group-hover:border-orange-500/50 transition-colors duration-300">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                    <iframe
                      src={website.url}
                      className="w-[400%] h-[400%] origin-top-left pointer-events-none"
                      style={{ transform: 'scale(0.25)' }}
                      title={website.title}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {website.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {website.description}
                  </p>

                  {/* Button */}
                  <button
                  onClick={() => setSelectedWebsite(website.url)}
                  className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors duration-200 font-semibold">

                    <ExternalLink className="w-4 h-4" />
                    Открыть превью
                  </button>

                  {/* Corner accent */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-orange-500/20 group-hover:border-orange-500/50 transition-colors duration-300" />
                </div>

                  {/* External glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/0 via-orange-600/20 to-orange-600/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Expand Button */}
          {websites.length > 6 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mb-16"
            >
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold hover:from-orange-500 hover:to-red-500 transition-all duration-300 shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] flex items-center gap-2"
              >
                {isExpanded ? 'Скрыть' : `Показать еще (${websites.length - 6})`}
              </button>
            </motion.div>
          )}

        </div>
      </div>

      {/* Website Preview Modal */}
      <AnimatePresence>
        {selectedWebsite &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedWebsite(null)}>

            <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-[#1a1a1a] border-2 border-orange-500/50 rounded-2xl p-4 w-full max-w-6xl h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}>

              <div className="flex items-center justify-between mb-4">
                <a
                href={selectedWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 flex items-center gap-2">

                  {selectedWebsite}
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                onClick={() => setSelectedWebsite(null)}
                className="text-gray-400 hover:text-white">

                  <X className="w-6 h-6" />
                </button>
              </div>
              <iframe
              src={selectedWebsite}
              className="w-full flex-1 rounded-lg border border-orange-500/30"
              title="Website Preview" />

            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </section>);

}