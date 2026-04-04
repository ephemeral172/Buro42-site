import React from 'react';
import AuthPageBackground from './AuthPageBackground';

/**
 * Оболочка как у публичных страниц Infisical (см. LoginPage):
 * градиент from-card via-bunker-900 to-card + декоративный фон.
 */
export default function InfisicalPageShell({ children }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-gradient-to-tr from-ifi-card via-bunker-900 to-ifi-card font-sans text-ifi-fg antialiased">
      <AuthPageBackground />
      <div className="relative z-10 flex min-h-screen flex-col">{children}</div>
    </div>
  );
}
