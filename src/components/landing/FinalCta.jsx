import React from 'react';

export default function FinalCta() {
  return (
    <section id="contact" className="scroll-mt-20 border-y border-ifi-border py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-ifi-fg md:text-4xl">
          Начать просто: короткий созвон и план пилота
        </h2>
        <p className="mt-4 text-lg text-mineshaft-400">
          Расскажите о задаче — предложим ограниченный по scope пилот с критериями успеха.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="tel:+79309917433"
            className="inline-flex h-10 min-w-[160px] items-center justify-center rounded-md bg-ifi-lime px-8 text-sm font-semibold text-mineshaft-900 transition hover:bg-ifi-lime-hover active:scale-[0.99]"
          >
            Позвонить
          </a>
          <a
            href="https://t.me/Drakedog_ee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 min-w-[160px] items-center justify-center rounded-md border border-ifi-border px-8 text-sm font-semibold text-ifi-fg transition hover:border-ifi-fg/25 hover:bg-ifi-fg/10 active:scale-[0.99]"
          >
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
