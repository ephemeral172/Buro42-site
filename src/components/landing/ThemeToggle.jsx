import { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { getTheme, subscribeTheme, toggleTheme } from '@/theme';

export default function ThemeToggle({ className }) {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const theme = useSyncExternalStore(subscribeTheme, getTheme, () => 'dark');
  const isLight = theme === 'light';

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? t('nav.themeToDark') : t('nav.themeToLight')}
      title={isLight ? t('nav.themeToDark') : t('nav.themeToLight')}
      initial={reduceMotion ? false : { opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileTap={reduceMotion ? {} : { scale: 0.94 }}
      className={cn(
        'relative inline-flex h-9 w-9 items-center justify-center rounded-md',
        'border border-ifi-border/90 bg-mineshaft-900/45 text-ifi-fg shadow-[inset_0_1px_0_0_rgba(224,237,52,0.06)]',
        'backdrop-blur-md transition-colors hover:border-ifi-lime/35 hover:bg-mineshaft-800/70',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ifi-lime/40',
        className
      )}
    >
      <AnimateIcon isLight={isLight} reduceMotion={reduceMotion} />
    </motion.button>
  );
}

function AnimateIcon({ isLight, reduceMotion }) {
  return (
    <span className="relative flex h-4 w-4 items-center justify-center">
      <motion.span
        key={isLight ? 'sun' : 'moon'}
        initial={reduceMotion ? false : { opacity: 0, rotate: -40, scale: 0.7 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {isLight ? (
          <Moon className="h-4 w-4 text-ifi-lime" strokeWidth={1.75} />
        ) : (
          <Sun className="h-4 w-4 text-ifi-lime" strokeWidth={1.75} />
        )}
      </motion.span>
    </span>
  );
}
