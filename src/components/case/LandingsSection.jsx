import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ExternalLink, X, Zap } from 'lucide-react';

const websites = [
{ url: 'https://www.fullfaq.dev/', title: 'FullFAQ', description: 'AI-powered FAQ платформа' },
{ url: 'https://flower-heaven.vercel.app/', title: 'Flower Heaven', description: 'Лендинг цветочного магазина' },
{ url: 'https://smile-bright-five.vercel.app/', title: 'Smile Bright', description: 'Стоматологическая клиника' }];


export default function LandingsSection() {
  const [selectedWebsite, setSelectedWebsite] = useState(null);

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
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {websites.map((website, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative">

                <div className="relative h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-600/5 to-red-600/5 blur-3xl group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
                      <Code className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 opacity-20 blur-xl" />
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
          </div>


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