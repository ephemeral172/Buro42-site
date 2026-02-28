import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Glitch background lines */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent"
          style={{
            top: `${10 + i * 12}%`,
            left: 0,
            right: 0
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleX: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut'
          }} />

        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end">

          <div className="relative group">
            {/* Glowing frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
            
            {/* Corner brackets */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-orange-500" />
            <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-orange-500" />
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-orange-500" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-orange-500" />

            {/* Photo */}
            <div className="relative overflow-hidden rounded-lg border-2 border-orange-500/30">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6918b5f06c3ad045e4f53670/f24018497_telegram-cloud-photo-size-2-5301134849508839025-y.jpg"
                alt="Кочергин Максим Андреевич"
                className="w-80 h-80 object-cover transition-all duration-500" />

              
              {/* Scan line effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"
                animate={{
                  y: ['-100%', '200%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }} />

            </div>

            {/* Status indicator */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0a0a0a] rounded-full px-3 py-1 flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-xs text-orange-500 font-mono">AVAILABLE</span>
            </div>
          </div>
        </motion.div>

        {/* Right side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8">

          {/* Name with glitch effect */}
          <div className="relative">
            <motion.h1
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white relative"
              animate={{
                textShadow: [
                '0 0 10px rgba(255,107,53,0)',
                '0 0 20px rgba(255,107,53,0.5)',
                '0 0 10px rgba(255,107,53,0)']

              }}
              transition={{ duration: 2, repeat: Infinity }}>

              Кочергин<br />
              <span className="text-orange-500">Максим</span><br />
              Андреевич
            </motion.h1>
            
            {/* Glitch layers */}
            <motion.h1
              className="absolute top-0 left-0 text-5xl lg:text-6xl xl:text-7xl font-bold text-orange-500 opacity-70 mix-blend-screen pointer-events-none"
              animate={{
                x: [0, -2, 2, 0],
                opacity: [0, 0.7, 0]
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 3
              }}>

              Кочергин<br />
              Максим<br />
              Андреевич
            </motion.h1>
          </div>

          {/* Title */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Terminal className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
                Fullstack AI Developer
              </h2>
            </div>
            
            {/* Services */}
            <div className="flex flex-wrap gap-3 text-gray-400 font-mono text-sm">
              <span className="flex items-center gap-2 bg-[#1a1a1a] border border-orange-500/30 px-3 py-1 rounded">
                <Code2 className="w-4 h-4" /> Web
              </span>
              <span className="flex items-center gap-2 bg-[#1a1a1a] border border-orange-500/30 px-3 py-1 rounded">
                <Zap className="w-4 h-4" /> AI
              </span>
              <span className="flex items-center gap-2 bg-[#1a1a1a] border border-orange-500/30 px-3 py-1 rounded">
                <Terminal className="w-4 h-4" /> Telegram Mini Apps
              </span>
            </div>
          </div>

          {/* MVP Info */}
          <div className="relative border-l-4 border-orange-500 pl-6 py-4 bg-gradient-to-r from-orange-500/10 to-transparent">
            <p className="text-3xl font-bold text-white mb-2">MVP за 24–48 часов

            </p>
            <p className="text-gray-400 font-mono text-sm">
              Фокус: скорость разработки, безопасность, масштабируемость
            </p>
          </div>

        </motion.div>
      </div>
    </section>);

}