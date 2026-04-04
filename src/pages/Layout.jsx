
export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-ifi-bg">
      <style>{`
        :root {
          --color-accent: #e0ed34;
          --color-bg: #19191c;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: #2d2f33 #19191c;
        }

        *::-webkit-scrollbar {
          width: 8px;
        }

        *::-webkit-scrollbar-track {
          background: #19191c;
        }

        *::-webkit-scrollbar-thumb {
          background: #323439;
          border-radius: 4px;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', system-ui, sans-serif;
          background: #19191c;
        }

        ::selection {
          background: rgba(224, 237, 52, 0.35);
          color: #111419;
        }
      `}</style>
      {children}
    </div>
  );
}
