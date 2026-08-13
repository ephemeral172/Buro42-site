/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		screens: {
  			xs: '480px',
  		},
  		fontFamily: {
  			sans: ['Roboto', 'system-ui', 'sans-serif'],
  			display: ['Roboto', 'system-ui', 'sans-serif'],
  			/** Только логотип Buro42 в шапке и подвале */
  			brand: ['Unbounded', 'Roboto', 'system-ui', 'sans-serif'],
  			mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
  		},
  		fontSize: {
  			/** Герой h1 — крупная шкала */
  			'display-sm': ['3.375rem', { lineHeight: '1.06', letterSpacing: '-0.024em' }],
  			display: ['clamp(3.5rem,7.25vw+1.35rem,5.35rem)', { lineHeight: '1.04', letterSpacing: '-0.026em' }],
  			'display-lg': ['clamp(4.25rem,8vw+1.2rem,6rem)', { lineHeight: '1.025', letterSpacing: '-0.03em' }],
  			'display-xl': ['clamp(4.75rem,7vw+1.85rem,6.65rem)', { lineHeight: '1.02', letterSpacing: '-0.032em' }],
  			'display-2xl': ['clamp(5.35rem,5.5vw+2.25rem,7.15rem)', { lineHeight: '1.01', letterSpacing: '-0.034em' }],
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			/* Infisical tokens — RGB channels in CSS vars (see index.css) for light/dark + opacity */
  			ifi: {
  				lime: 'rgb(var(--ifi-lime) / <alpha-value>)',
  				'lime-hover': 'rgb(var(--ifi-lime-hover) / <alpha-value>)',
  				'lime-soft': 'rgb(var(--ifi-lime-soft) / <alpha-value>)',
  				'lime-muted': 'rgb(var(--ifi-lime-muted) / <alpha-value>)',
  				'lime-border': 'rgb(var(--ifi-lime-border) / <alpha-value>)',
  				'lime-ink': 'rgb(var(--ifi-lime-ink) / <alpha-value>)',
  				'lime-ink-deep': 'rgb(var(--ifi-lime-ink-deep) / <alpha-value>)',
  				info: 'rgb(var(--ifi-info) / <alpha-value>)',
  				border: 'rgb(var(--ifi-border) / <alpha-value>)',
  				surface: 'rgb(var(--ifi-surface) / <alpha-value>)',
  				'surface-2': 'rgb(var(--ifi-surface-2) / <alpha-value>)',
  				ink: 'rgb(var(--ifi-ink) / <alpha-value>)',
  				muted: 'rgb(var(--ifi-muted) / <alpha-value>)',
  				'muted-2': 'rgb(var(--ifi-muted-2) / <alpha-value>)',
  				card: 'rgb(var(--ifi-card) / <alpha-value>)',
  				bg: 'rgb(var(--ifi-bg) / <alpha-value>)',
  				fg: 'rgb(var(--ifi-fg) / <alpha-value>)',
  				label: 'rgb(var(--ifi-label) / <alpha-value>)',
  			},
  			mineshaft: {
  				50: 'rgb(var(--mineshaft-50) / <alpha-value>)',
  				100: 'rgb(var(--mineshaft-100) / <alpha-value>)',
  				200: 'rgb(var(--mineshaft-200) / <alpha-value>)',
  				300: 'rgb(var(--mineshaft-300) / <alpha-value>)',
  				400: 'rgb(var(--mineshaft-400) / <alpha-value>)',
  				500: 'rgb(var(--mineshaft-500) / <alpha-value>)',
  				600: 'rgb(var(--mineshaft-600) / <alpha-value>)',
  				700: 'rgb(var(--mineshaft-700) / <alpha-value>)',
  				800: 'rgb(var(--mineshaft-800) / <alpha-value>)',
  				900: 'rgb(var(--mineshaft-900) / <alpha-value>)',
  				950: 'rgb(var(--mineshaft-950) / <alpha-value>)',
  				DEFAULT: 'rgb(var(--mineshaft-500) / <alpha-value>)',
  			},
  			bunker: {
  				50: 'rgb(var(--bunker-50) / <alpha-value>)',
  				100: 'rgb(var(--bunker-100) / <alpha-value>)',
  				200: 'rgb(var(--bunker-200) / <alpha-value>)',
  				300: 'rgb(var(--bunker-300) / <alpha-value>)',
  				400: 'rgb(var(--bunker-400) / <alpha-value>)',
  				500: 'rgb(var(--bunker-500) / <alpha-value>)',
  				600: 'rgb(var(--bunker-600) / <alpha-value>)',
  				700: 'rgb(var(--bunker-700) / <alpha-value>)',
  				800: 'rgb(var(--bunker-800) / <alpha-value>)',
  				900: 'rgb(var(--bunker-900) / <alpha-value>)',
  				DEFAULT: 'rgb(var(--bunker-500) / <alpha-value>)',
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			marquee: {
  				from: { transform: 'translateX(0)' },
  				to: { transform: 'translateX(calc(-100% - var(--gap, 1rem)))' },
  			},
  			slowRotate: {
  				from: { transform: 'rotate(0deg)' },
  				to: { transform: 'rotate(360deg)' },
  			},
  			'brand-shimmer': {
  				'0%, 100%': { backgroundPosition: '0% 50%' },
  				'50%': { backgroundPosition: '100% 50%' },
  			},
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			marquee: 'marquee var(--duration, 40s) linear infinite',
  			/* Infisical marketing: careers hero neon-loops */
  			slowRotate: 'slowRotate 100s linear infinite',
  			'brand-shimmer': 'brand-shimmer 3.2s ease-in-out infinite',
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addVariant }) {
      addVariant('light', 'html.light &');
    },
  ],
}