import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import BrandMark from '@/components/landing/BrandMark';

const links = [
  { href: '#platform', label: 'Платформа' },
  { href: '#integrations', label: 'Интеграции' },
  { href: '#cases', label: 'Кейсы' },
  { href: '#contact', label: 'Контакты' },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ifi-border/80 bg-ifi-bg/75 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-4 py-3 md:py-3.5">
        <a
          href="#"
          className="text-xl font-semibold tracking-tight text-ifi-fg md:text-2xl"
        >
          <BrandMark />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основное меню">
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
          <a
            href="#cases"
            className="inline-flex h-9 items-center justify-center rounded-md border border-ifi-border px-3 text-sm font-medium text-ifi-fg transition hover:border-ifi-fg/25 hover:bg-ifi-fg/10"
          >
            Кейсы
          </a>
          <a
            href="#contact"
            className="inline-flex h-9 items-center justify-center rounded-md bg-ifi-lime px-3 text-sm font-semibold text-mineshaft-900 transition hover:bg-ifi-lime-hover"
          >
            Связаться
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-mineshaft-300 md:hidden"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ifi-border bg-ifi-card px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-mineshaft-300"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-full bg-ifi-lime py-2.5 text-center text-sm font-semibold text-mineshaft-900"
              onClick={() => setOpen(false)}
            >
              Связаться
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
