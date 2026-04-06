import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import VantaTrunkBg from '@/components/landing/VantaTrunkBg';

/** Панель с TRUNK: `true` — справа, `false` — слева. */
const TRUNK_PANEL_RIGHT = true;

export default function MidBanner() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  return (
    <>
      {/* 1 — широкий текстовый блок */}
      <section className="border-t border-ifi-border bg-mineshaft-900/25 px-4 py-12 md:px-8 md:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-5xl text-balance text-center"
        >
          <p className="text-2xl font-semibold leading-snug tracking-tight text-ifi-fg md:text-3xl md:leading-tight lg:text-4xl lg:leading-[1.15]">
            {t('midBanner.headline')}
          </p>
        </motion.div>
      </section>

      {/* 2 — две колонки: контент слева, Vanta TRUNK справа */}
      <section className="border-b border-ifi-border">
        <div className="mx-auto grid max-w-6xl md:grid-cols-[minmax(0,1fr)_minmax(280px,46%)] md:items-stretch">
          <div
            className={cn(
              'flex flex-col justify-center gap-6 px-4 py-10 md:px-8 md:py-12 lg:py-16',
              TRUNK_PANEL_RIGHT ? 'md:order-1 lg:pr-10' : 'md:order-2 lg:pl-10'
            )}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="max-w-xl text-balance text-base leading-relaxed text-mineshaft-400 md:text-lg"
            >
              {t('midBanner.body')}
            </motion.p>
            <motion.a
              href="#cases"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.12 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-fit items-center gap-1.5 rounded-md bg-ifi-lime px-5 py-2.5 text-sm font-semibold text-mineshaft-900 transition hover:bg-ifi-lime-hover"
            >
              {t('midBanner.cta')}
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </motion.a>
          </div>

          <div
            className={cn(
              'relative min-h-[220px] border-t border-ifi-border bg-mineshaft-900/40 md:min-h-[min(52vh,440px)] md:border-t-0',
              TRUNK_PANEL_RIGHT ? 'md:order-2 md:border-l md:border-ifi-border' : 'md:order-1 md:border-r md:border-ifi-border'
            )}
          >
            {!reduceMotion && (
              <VantaTrunkBg className="opacity-[0.45] md:opacity-50" />
            )}
            {!reduceMotion && (
              <div
                className={cn(
                  'pointer-events-none absolute inset-y-0 z-[1] w-2/5 max-w-[120px] md:w-1/4 md:max-w-[100px]',
                  TRUNK_PANEL_RIGHT
                    ? 'left-0 bg-gradient-to-r from-mineshaft-900 to-transparent'
                    : 'right-0 bg-gradient-to-l from-mineshaft-900 to-transparent'
                )}
                aria-hidden
              />
            )}
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-mineshaft-900/25 via-transparent to-mineshaft-900/40 md:bg-gradient-to-t md:from-transparent md:via-transparent md:to-mineshaft-900/35"
              aria-hidden
            />
          </div>
        </div>
      </section>
    </>
  );
}
