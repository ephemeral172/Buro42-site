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
  			/** Заголовки маркетинга — тот же Roboto, плотнее трекинг через утилиты */
  			display: ['Roboto', 'system-ui', 'sans-serif'],
  			mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
  		},
  		fontSize: {
  			/** Герой: заметно крупнее базовая ступень и верх clamp */
  			'display-sm': ['3rem', { lineHeight: '1.08', letterSpacing: '-0.022em' }],
  			display: ['clamp(3.125rem,6.75vw+1.25rem,4.875rem)', { lineHeight: '1.05', letterSpacing: '-0.024em' }],
  			'display-lg': ['clamp(3.875rem,7.5vw+1.15rem,5.5rem)', { lineHeight: '1.03', letterSpacing: '-0.03em' }],
  			'display-xl': ['clamp(4.25rem,6vw+1.75rem,5.875rem)', { lineHeight: '1.02', letterSpacing: '-0.032em' }],
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			/* Infisical frontend design tokens (infisical-main/frontend/src/index.css) */
  			ifi: {
  				lime: '#e0ed34',
  				'lime-hover': '#c2d62b',
  				'lime-soft': '#fcfce8',
  				'lime-muted': '#f8faca',
  				'lime-border': '#ecf26d',
  				'lime-ink': '#708f13',
  				'lime-ink-deep': '#4d6b0b',
  				info: '#63b0bd',
  				border: '#2b2c30',
  				surface: '#f7f7f7',
  				'surface-2': '#efefef',
  				ink: '#111419',
  				muted: '#707174',
  				'muted-2': '#5b5c5e',
  				card: '#16181a',
  				bg: '#19191c',
  				fg: '#ebebeb',
  				label: '#adaeb0',
  			},
  			mineshaft: {
  				50: '#f5f5f5',
  				100: '#ebebeb',
  				200: '#ccccce',
  				300: '#adaeb0',
  				400: '#707174',
  				500: '#323439',
  				600: '#2d2f33',
  				700: '#26272b',
  				800: '#1e1f22',
  				900: '#19191c',
  				DEFAULT: '#323439',
  			},
  			bunker: {
  				50: '#f3f4f4',
  				100: '#e8e8e9',
  				200: '#c5c6c8',
  				300: '#a2a4a6',
  				400: '#5d5f64',
  				500: '#171b21',
  				600: '#15181e',
  				700: '#111419',
  				800: '#0e1014',
  				900: '#0b0d10',
  				DEFAULT: '#171b21',
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
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			marquee: 'marquee var(--duration, 40s) linear infinite',
  			/* Infisical marketing: careers hero neon-loops */
  			slowRotate: 'slowRotate 100s linear infinite',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}