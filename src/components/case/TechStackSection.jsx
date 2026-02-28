import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Server, Database, Cpu, Cloud, Box, Code2, FileCode } from 'lucide-react';

const techCategories = [
  {
    title: 'Frontend',
    techs: [
      { name: 'React', icon: Code2 },
      { name: 'Next.js', icon: Zap },
      { name: 'Vite', icon: Zap },
    ],
  },
  {
    title: 'Backend',
    techs: [
      { name: 'Node.js', icon: Server },
      { name: 'Python', icon: FileCode },
      { name: 'TypeScript', icon: Code2 },
    ],
  },
  {
    title: 'Databases',
    techs: [
      { name: 'PostgreSQL', icon: Database },
      { name: 'MongoDB', icon: Database },
      { name: 'Redis', icon: Database },
    ],
  },
  {
    title: 'AI & Automation',
    techs: [
      { name: 'LLM', icon: Cpu },
      { name: 'n8n', icon: Cpu },
    ],
  },
  {
    title: 'DevOps',
    techs: [
      { name: 'Docker', icon: Box },
      { name: 'AWS', icon: Cloud },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section className="relative py-32 px-4 bg-[#121212]">
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
            <span className="text-orange-500 font-mono text-sm tracking-wider">TECH_ARSENAL</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500" />
          </div>
        </motion.div>

        {/* Tech grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-orange-500/20 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 overflow-hidden">
                {/* Header with glow */}
                <div className="relative mb-6">
                  <h3 className="text-xl font-bold text-orange-500 mb-2 relative z-10">
                    {category.title}
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full" />
                  <motion.div
                    className="absolute -top-2 -left-2 w-20 h-20 bg-orange-500/20 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: catIndex * 0.3,
                    }}
                  />
                </div>

                {/* Technologies */}
                <div className="space-y-3 relative z-10">
                  {category.techs.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-3 p-3 bg-[#0a0a0a]/50 border border-orange-500/10 rounded-lg hover:border-orange-500/30 hover:bg-[#0a0a0a]/80 transition-all duration-200 cursor-pointer"
                    >
                      {/* Icon */}
                      <tech.icon className="w-6 h-6 text-orange-500" />
                      
                      {/* Name */}
                      <span className="text-gray-300 font-mono text-sm flex-1">
                        {tech.name}
                      </span>

                      {/* Status dot */}
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                      </div>
                      ))}
                      </div>

                {/* Corner decorations */}
                <div className="absolute top-2 right-2 w-12 h-12 border-t border-r border-orange-500/20" />
                <div className="absolute bottom-2 left-2 w-12 h-12 border-b border-l border-orange-500/20" />

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
              </div>

              {/* External glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/0 via-orange-600/20 to-orange-600/0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-orange-500/30 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-gray-400 font-mono text-sm">
              Современный стек для быстрой разработки
            </span>
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </section>
  );
}