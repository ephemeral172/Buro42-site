import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BrandMark from '@/components/landing/BrandMark';
import LanguageSwitcher from '@/components/landing/LanguageSwitcher';
import ThemeToggle from '@/components/landing/ThemeToggle';

const linkDefs = [
  { href: '#platform', key: 'platform' },
  { href: '#integrations', key: 'integrations' },
  { href: '#cases', key: 'cases' },
  { href: '#contact', key: 'contacts' },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

const linkItemVariants = {
  hidden: { opacity: 0, x: -16, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

const instantItem = {
  hidden: { opacity: 1, x: 0, filter: 'blur(0px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, delay: 0.12, ease: [0.16, 1, 0.3, 1] },
  },
};

const ctaInstant = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export default function SiteNav() {
  const { t } = useTranslation();
  const links = useMemo(
    () => linkDefs.map((l) => ({ ...l, label: t(`nav.${l.key}`) })),
    [t]
  );
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    if (y < 80 || y < lastY.current) {
      setVisible(true);
    } else if (y > lastY.current + 4) {
      setVisible(false);
      setOpen(false);
    }
    lastY.current = y;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const panelTransition = reduceMotion
    ? { duration: 0.2 }
    : { duration: 0.38, ease: [0.16, 1, 0.3, 1] };

  return (
    <motion.header
      animate={{ y: visible ? 0 : '-100%' }}
      transition={reduceMotion ? { duration: 0.15 } : { duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 border-b border-ifi-border/80 bg-ifi-bg/75 backdrop-blur-md"
    >
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-4 py-3 md:py-3.5">
        <a
          href="#"
          className="text-xl font-semibold tracking-tight text-ifi-fg md:text-2xl"
        >
          <BrandMark />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label={t('nav.mainNav')}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-mineshaft-400 transition hover:text-ifi-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <LanguageSwitcher className="mr-1" />
          <a
            href="#cases"
            className="inline-flex h-9 items-center justify-center rounded-md border border-ifi-border px-3 text-sm font-medium text-ifi-fg transition hover:border-ifi-fg/25 hover:bg-ifi-fg/10"
          >
            {t('nav.ctaCases')}
          </a>
          <a
            href="#contact"
            className="inline-flex h-9 items-center justify-center rounded-md bg-ifi-lime px-3 text-sm font-semibold text-ifi-ink transition hover:bg-ifi-lime-hover"
          >
            {t('nav.ctaContact')}
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <motion.button
            type="button"
            className="relative rounded-lg p-2 text-mineshaft-300"
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'close' : 'open'}
                initial={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, rotate: -75, scale: 0.85 }
                }
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, rotate: 75, scale: 0.85 }
                }
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="flex"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-drawer"
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -14, scaleY: 0.92 }
            }
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -10, scaleY: 0.96 }
            }
            transition={panelTransition}
            style={{ transformOrigin: 'top' }}
            className="overflow-hidden border-t border-ifi-lime/25 bg-ifi-card/95 shadow-[0_28px_56px_-20px_rgba(0,0,0,0.55)] light:shadow-[0_28px_56px_-20px_rgba(17,20,25,0.12)] backdrop-blur-xl md:hidden"
          >
            <motion.nav
              className="flex flex-col gap-1 px-4 py-5"
              aria-label={t('nav.mobileNav')}
              variants={
                reduceMotion
                  ? { hidden: {}, visible: { transition: { staggerChildren: 0, delayChildren: 0 } } }
                  : listVariants
              }
              initial="hidden"
              animate="visible"
            >
              <div className="mb-2 flex items-center justify-center gap-2 px-3">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
              {links.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  variants={reduceMotion ? instantItem : linkItemVariants}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-mineshaft-200 transition hover:bg-ifi-fg/5 hover:text-ifi-fg"
                  onClick={() => setOpen(false)}
                  whileTap={{ scale: 0.98 }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                variants={reduceMotion ? ctaInstant : ctaVariants}
                className="mt-3 rounded-full bg-ifi-lime py-3 text-center text-sm font-semibold text-ifi-ink shadow-[0_0_24px_-4px_rgba(224,237,52,0.35)] transition hover:bg-ifi-lime-hover"
                onClick={() => setOpen(false)}
                whileTap={{ scale: 0.98 }}
              >
                {t('nav.ctaContact')}
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
