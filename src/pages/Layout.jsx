
import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
        
        :root {
          --color-primary: #ff6b00;
          --color-secondary: #00ffff;
          --color-bg: #0a0a0a;
        }
        
        * {
          scrollbar-width: thin;
          scrollbar-color: #ff6b00 #1a1a1a;
        }
        
        *::-webkit-scrollbar {
          width: 6px;
        }
        
        *::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        
        *::-webkit-scrollbar-thumb {
          background: #ff6b00;
          border-radius: 3px;
        }
        
        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'JetBrains Mono', monospace;
          background: #0a0a0a;
        }
        
        ::selection {
          background: rgba(255, 107, 0, 0.3);
          color: white;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
      {children}
    </div>
  );
}
