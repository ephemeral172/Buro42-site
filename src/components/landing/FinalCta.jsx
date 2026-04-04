import React from 'react';
import ObfuscatedEmailLink from '@/components/landing/ObfuscatedEmailLink';

export default function FinalCta() {
  return (
    <section id="contact" className="scroll-mt-20 border-y border-ifi-border py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-ifi-fg md:text-4xl">Начать просто</h2>
        <p className="mt-4 text-lg text-mineshaft-400">
          Расскажите о задаче — предложим пилот с заранее согласованным объёмом работ и понятными критериями успеха.
        </p>
        <div className="mt-10 flex flex-col items-center gap-2">
          <p className="text-xs font-medium uppercase tracking-wider text-mineshaft-500">Почта</p>
          <ObfuscatedEmailLink className="!text-base" />
        </div>
      </div>
    </section>
  );
}
