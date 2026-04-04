import React, { useCallback, useMemo } from 'react';
import { cn } from '@/lib/utils';

const flip = (s) => [...s].reverse().join('');

/**
 * Почта без mailto в разметке до действия пользователя (снижает простой сбор с страницы).
 */
export default function ObfuscatedEmailLink({ className }) {
  const { address, local, domain } = useMemo(() => {
    const localPart = flip('olleh');
    const domainPart = flip('ved.24orub');
    return {
      address: `${localPart}@${domainPart}`,
      local: localPart,
      domain: domainPart,
    };
  }, []);

  const openMail = useCallback(() => {
    window.location.href = `mailto:${local}@${domain}`;
  }, [local, domain]);

  return (
    <button
      type="button"
      onClick={openMail}
      className={cn(
        'rounded text-left font-mono text-sm text-ifi-fg underline decoration-ifi-border underline-offset-4 outline-none transition hover:text-ifi-lime hover:decoration-ifi-lime/60 focus-visible:ring-2 focus-visible:ring-ifi-lime/35 focus-visible:ring-offset-2 focus-visible:ring-offset-ifi-bg',
        className
      )}
      aria-label={`Написать на ${address}`}
    >
      <span className="text-ifi-fg">
        {local}@{domain}
      </span>
    </button>
  );
}
