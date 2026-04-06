import { Globe } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

const LANGS = [
  { code: 'ru', short: 'RU', label: 'Русский' },
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'ko', short: 'KO', label: '한국어' },
];

function resolveCode(i18n) {
  const raw = (i18n.resolvedLanguage || i18n.language || 'ru').split('-')[0];
  return LANGS.some((l) => l.code === raw) ? raw : 'ru';
}

export default function LanguageSwitcher({ className }) {
  const { i18n } = useTranslation();
  const reduceMotion = useReducedMotion();
  const current = resolveCode(i18n);

  const ariaLang =
    current === 'ru' ? 'Язык интерфейса' : current === 'ko' ? '인터페이스 언어' : 'Interface language';

  const pillTransition = reduceMotion
    ? { duration: 0.18, ease: [0.16, 1, 0.3, 1] }
    : { type: 'spring', stiffness: 520, damping: 34, mass: 0.85 };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: -6, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group/switch relative inline-flex select-none items-center gap-1 rounded-md',
        'border border-ifi-border/90 bg-mineshaft-900/45 p-1 pl-1.5 shadow-[inset_0_1px_0_0_rgba(224,237,52,0.06)]',
        'backdrop-blur-md',
        'before:pointer-events-none before:absolute before:inset-0 before:rounded-md',
        'before:bg-[linear-gradient(135deg,rgba(224,237,52,0.08)_0%,transparent_42%,transparent_58%,rgba(99,176,189,0.06)_100%)]',
        'before:opacity-0 before:transition-opacity before:duration-500',
        'hover:before:opacity-100',
        className
      )}
      role="radiogroup"
      aria-label={ariaLang}
    >
      <motion.div
        aria-hidden="true"
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-mineshaft-800/60 ring-1 ring-ifi-border/60"
        whileHover={
          reduceMotion
            ? {}
            : {
                rotate: 18,
                scale: 1.06,
                boxShadow: '0 0 20px -4px rgba(224,237,52,0.35)',
              }
        }
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      >
        <Globe className="h-3.5 w-3.5 text-ifi-lime/90" strokeWidth={1.75} />
      </motion.div>

      <div className="relative flex items-stretch rounded-md bg-mineshaft-950/50 p-0.5 ring-1 ring-black/20">
        {LANGS.map(({ code, short, label }) => {
          const active = current === code;
          return (
            <motion.button
              key={code}
              type="button"
              role="radio"
              aria-checked={active}
              title={label}
              aria-label={label}
              onClick={() => i18n.changeLanguage(code)}
              whileTap={reduceMotion ? {} : { scale: 0.94 }}
              whileHover={reduceMotion ? {} : { y: active ? 0 : -0.5 }}
              className={cn(
                'relative z-10 min-h-[1.875rem] min-w-[2.35rem] rounded-md px-2 py-1 text-[11px] font-bold tracking-wide',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ifi-lime/40 focus-visible:ring-offset-2 focus-visible:ring-offset-mineshaft-900',
                active ? 'text-mineshaft-900' : 'text-mineshaft-500 hover:text-mineshaft-300'
              )}
            >
              {active && (
                <motion.span
                  layoutId="lang-switch-pill"
                  className={cn(
                    'absolute inset-0 z-0 rounded-md',
                    'bg-gradient-to-b from-ifi-lime to-[#c9d43a]',
                    'shadow-[0_2px_12px_-2px_rgba(224,237,52,0.45),inset_0_1px_0_0_rgba(255,255,255,0.25)]'
                  )}
                  transition={pillTransition}
                />
              )}
              <span className="relative z-10">{short}</span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
