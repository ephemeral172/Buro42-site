import React from 'react';
import { motion } from 'framer-motion';

export default function CasesSectionHeader() {
  return (
    <div id="cases" className="scroll-mt-20 px-4 pb-10 pt-16 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-6xl text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ifi-lime">Кейсы</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ifi-fg md:text-4xl">
          Реализованные проекты
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-mineshaft-400">
          От AI-оркестрации и RAG до Telegram Mini Apps и отраслевых внедрений.
        </p>
      </motion.div>
    </div>
  );
}
