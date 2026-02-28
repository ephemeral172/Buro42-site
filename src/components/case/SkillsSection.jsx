import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Server, MessageSquare, Workflow, CreditCard, Cog, Lock } from 'lucide-react';

const skills = [
  { icon: Brain, title: 'Fullstack AI-разработка', color: 'from-orange-600 to-red-500' },
  { icon: Server, title: 'Проектирование backend-архитектуры', color: 'from-orange-500 to-yellow-500' },
  { icon: MessageSquare, title: 'Telegram Mini Apps и боты', color: 'from-orange-600 to-orange-400' },
  { icon: Workflow, title: 'Интеграция LLM и AI-оркестраций', color: 'from-red-600 to-orange-500' },
  { icon: CreditCard, title: 'API, платежи, очереди задач', color: 'from-orange-500 to-amber-500' },
  { icon: Cog, title: 'Асинхронные системы и автоматизация', color: 'from-orange-600 to-orange-500' },
  { icon: Lock, title: 'Безопасность и контроль доступа', color: 'from-red-500 to-orange-600' },
];

export default function SkillsSection() {
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
            <span className="text-orange-500 font-mono text-sm tracking-wider">SKILLS_MATRIX</span>
          </div>
        </motion.div>

        {/* Skills grid */}
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Skill card */}
              <div className="relative bg-[#1a1a1a] border border-orange-500/20 rounded-lg overflow-hidden hover:border-orange-500/50 transition-all duration-300">
                {/* Progress bar background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-5 group-hover:opacity-10`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  style={{ transformOrigin: 'left' }}
                />

                {/* Content */}
                <div className="relative flex items-center gap-4 p-5">
                  {/* Icon */}
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                      <skill.icon className="w-7 h-7 text-white" />
                    </div>
                    {/* Icon glow */}
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${skill.color} blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                  </div>

                  {/* Title */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-orange-500 transition-colors duration-300">
                      {skill.title}
                    </h3>
                  </div>

                  {/* Level indicator */}
                  <div className="hidden md:flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                        className={`w-2 rounded-sm bg-gradient-to-t ${skill.color}`}
                        style={{ height: `${(i + 1) * 6}px` }}
                      />
                    ))}
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="text-orange-500"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className={`h-1 bg-gradient-to-r ${skill.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>

              {/* Scan line effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  delay: index * 0.2,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 grid grid-cols-3 gap-4"
        >
          {[
            { label: 'ОПЫТ', value: 'FULLSTACK' },
            { label: 'ФОКУС', value: 'AI & MVP' },
            { label: 'ПОДХОД', value: 'AGILE' },
          ].map((stat, index) => (
            <div key={index} className="bg-[#1a1a1a] border border-orange-500/20 rounded-lg p-4 text-center">
              <p className="text-orange-500 font-mono text-xs mb-1">{stat.label}</p>
              <p className="text-white font-bold text-sm">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}