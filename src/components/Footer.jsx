import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Send, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-orange-500/20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Contact buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+79309917433"
              className="inline-flex items-center gap-2 bg-[#1a1a1a] border-2 border-orange-500 text-white px-6 py-3 rounded-full font-light hover:scale-105 transition-transform duration-300"
            >
              <Phone className="w-5 h-5" /> +7-930-991-74-33
            </a>
            <a
              href="https://t.me/Drakedog_ee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1a1a1a] border-2 border-orange-500 text-white px-6 py-3 rounded-full font-light hover:scale-105 transition-transform duration-300"
            >
              <Send className="w-5 h-5" /> @Drakedog_ee
            </a>
            <a
              href="https://github.com/Fullfaq-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1a1a1a] border-2 border-orange-500 text-white px-6 py-3 rounded-full font-light hover:scale-105 transition-transform duration-300"
            >
              <Code className="w-5 h-5" /> GitHub
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 font-mono text-sm">
            © 2026 — AI fullstack dev{' '}
            <span className="text-orange-500 font-semibold">Maxim Kochergin</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}