import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/** Плавающие «нейроны» и изгиб линии — AI / ML */
function AiBackdrop() {
  const spots = [
    { x: '8%', y: '18%', d: 3.8 },
    { x: '72%', y: '12%', d: 4.5 },
    { x: '22%', y: '62%', d: 5.2 },
    { x: '82%', y: '58%', d: 3.5 },
    { x: '48%', y: '38%', d: 4.2 },
  ];
  return (
    <>
      {spots.map((s, i) => (
        <motion.div
          key={i}
          className="absolute h-14 w-14 rounded-full bg-ifi-lime/20 blur-2xl md:h-20 md:w-20"
          style={{ left: s.x, top: s.y }}
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.25, 0.5, 0.25],
            x: [0, i % 2 === 0 ? 12 : -10, 0],
            y: [0, i % 2 === 0 ? -8 : 10, 0],
          }}
          transition={{ duration: s.d, repeat: Infinity, ease: 'easeInOut', delay: i * 0.25 }}
        />
      ))}
      <motion.svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 240"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="pillar-ai-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(224,237,52,0)" />
            <stop offset="45%" stopColor="rgba(224,237,52,0.35)" />
            <stop offset="100%" stopColor="rgba(99,176,189,0.25)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M20,140 Q120,40 200,120 T380,60"
          fill="none"
          stroke="url(#pillar-ai-stroke)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.4 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M40,200 Q180,80 340,160"
          fill="none"
          stroke="rgba(99,176,189,0.22)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
      </motion.svg>
    </>
  );
}

/** Движущиеся столбики — поток данных / Big Data */
function DataBackdrop() {
  const n = 14;
  return (
    <div
      className="absolute inset-x-0 bottom-0 flex h-[42%] min-h-[100px] items-end justify-center gap-[5px] px-6 md:gap-1.5"
      aria-hidden
    >
      {Array.from({ length: n }, (_, i) => (
        <motion.div
          key={i}
          className="origin-bottom w-[3px] rounded-t bg-gradient-to-t from-cyan-500/35 via-ifi-lime/45 to-cyan-300/25 shadow-[0_0_12px_rgba(99,176,189,0.15)] md:w-1.5"
          style={{ height: 100 }}
          initial={{ scaleY: 0.2 }}
          animate={{
            scaleY: [0.12 + (i % 3) * 0.08, 0.92 - (i % 4) * 0.06, 0.22, 0.78, 0.15],
          }}
          transition={{
            duration: 2.4 + (i % 5) * 0.22,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.09,
          }}
        />
      ))}
    </div>
  );
}

/** Хаб и лучи — интеграции и доступ */
function IntegrationsBackdrop() {
  const cx = 100;
  const cy = 100;
  const r = 58;
  const angles = [-90, -10, 40, 130, 200].map((deg) => (deg * Math.PI) / 180);
  const nodes = angles.map((a) => ({
    x: cx + r * Math.cos(a),
    y: cy + r * Math.sin(a),
  }));
  return (
    <motion.svg
      className="absolute left-1/2 top-1/2 aspect-square w-[min(100%,280px)] max-w-[320px] -translate-x-1/2 -translate-y-1/2 md:w-[min(100%,340px)]"
      viewBox="0 0 200 200"
      aria-hidden
    >
      {nodes.map((n, i) => (
        <motion.path
          key={i}
          d={`M ${cx} ${cy} L ${n.x} ${n.y}`}
          fill="none"
          stroke="rgba(224,237,52,0.22)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.3 }}
          animate={{
            pathLength: [0.1, 1, 0.15, 0.95],
            opacity: [0.2, 0.48, 0.18, 0.42],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.18,
          }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={`n-${i}`}
          cx={n.x}
          cy={n.y}
          r={4}
          fill="rgba(99,176,189,0.5)"
          animate={{ scale: [1, 1.35, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
      <motion.circle
        cx={cx}
        cy={cy}
        r={10}
        fill="rgba(224,237,52,0.35)"
        stroke="rgba(224,237,52,0.5)"
        strokeWidth="1"
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.svg>
  );
}

/**
 * Тематический фон столба платформы — не перехватывает pointer-events.
 */
export default function PillarMotionArt({ variant }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_85%_70%_at_50%_40%,rgba(224,237,52,0.04),transparent_62%)]"
        aria-hidden
      />
    );
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 min-h-[280px] overflow-hidden rounded-2xl md:min-h-[300px]"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_75%_at_40%_30%,rgba(25,25,28,0.2),transparent_55%)]" />
      {variant === 'ai' && <AiBackdrop />}
      {variant === 'data' && <DataBackdrop />}
      {variant === 'sec' && <IntegrationsBackdrop />}
    </div>
  );
}
