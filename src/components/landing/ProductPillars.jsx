import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedLimeDot } from '@/components/landing/AnimatedLimeDot';
import PillarMotionArt from '@/components/landing/PillarMotionArt';
import GlassCard from '@/components/ui/GlassCard';

function PillarPanel({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.45 }}
      className="h-full"
    >
      <GlassCard innerClassName="p-0">
      <ul className="divide-y divide-ifi-border/40 p-5 md:p-8">
        {items.map((item, j) => (
          <motion.li
            key={item.label}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.38, delay: j * 0.06, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ x: 2, transition: { type: 'spring', stiffness: 400, damping: 28 } }}
            className="group/dot flex gap-4 py-4 first:pt-0 last:pb-0 md:py-5 md:first:pt-0 md:last:pb-0"
          >
            <AnimatedLimeDot index={j} className="mt-0.5" />
            <div className="min-w-0">
              <p className="font-medium leading-snug text-ifi-fg transition-colors duration-200 group-hover/dot:text-ifi-lime/95">
                {item.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-mineshaft-400 transition-colors duration-200 group-hover/dot:text-mineshaft-300">
                {item.detail}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
      </GlassCard>
    </motion.div>
  );
}

const blockIds = ['ai', 'data', 'sec'];

export default function ProductPillars() {
  const { t } = useTranslation();
  const blocks = useMemo(
    () =>
      blockIds.map((id) => {
        const p = t(`pillars.${id}`, { returnObjects: true });
        const base = {
          id,
          title: p.title,
          body: p.body,
          learnLabel: p.learnLabel,
          panelItems: p.panels,
          learn: id === 'sec' ? '#integrations' : '#cases',
          try: id === 'ai' ? undefined : '#contact',
          tryLabel: id === 'ai' ? undefined : p.tryLabel,
        };
        return base;
      }),
    [t]
  );

  return (
    <section id="platform" className="scroll-mt-20">
      {blocks.map((block, index) => {
        const fromRight = index % 2 === 1;
        return (
        <motion.div
          key={block.id}
          initial={{
            opacity: 0,
            x: fromRight ? 28 : -28,
            filter: 'blur(6px)',
          }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center md:gap-16 md:py-24 lg:gap-20"
        >
          <div
            className={`relative min-h-[280px] md:min-h-[300px] ${index % 2 === 1 ? 'md:order-2' : ''}`}
          >
            <PillarMotionArt variant={block.id} />
            <div className="relative z-10">
            <h2 className="text-3xl font-semibold tracking-tight text-ifi-fg md:text-4xl">{block.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-mineshaft-400">{block.body}</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href={block.learn}
                className="group inline-flex items-center gap-1 text-sm font-semibold text-ifi-lime hover:text-[#ecf26d]"
              >
                {block.learnLabel}
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              {block.try ? (
                <a
                  href={block.try}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-ifi-fg underline decoration-mineshaft-600 underline-offset-4 hover:decoration-ifi-fg"
                >
                  {block.tryLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : null}
            </div>
            </div>
          </div>
          <div className={index % 2 === 1 ? 'md:order-1' : ''}>
            <PillarPanel items={block.panelItems} />
          </div>
        </motion.div>
        );
      })}
    </section>
  );
}
