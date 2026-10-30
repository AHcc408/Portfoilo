/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#070a0e',
          900: '#0d1117',
          800: '#161b22',
          700: '#21262d',
          600: '#30363d',
        },
        emerald: {
          neon: '#10b981',
          bright: '#059669',
          glow: '#34d399',
        },
        lime: {
          neon: '#a3e635',
          bright: '#84cc16',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace', 'ui-monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite cubic-bezier(0.4, 0, 0.6, 1)',
        'radar': 'radarWave 2s infinite ease-out',
        'float': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.9', filter: 'drop-shadow(0 0 15px rgba(16,185,129,0.5))' },
          '50%': { opacity: '0.6', filter: 'drop-shadow(0 0 5px rgba(16,185,129,0.2))' },
        },
        radarWave: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      boxShadow: {
        'emerald-glow': '0 0 25px -3px rgba(16, 185, 129, 0.35)',
        'emerald-card': '0 8px 32px 0 rgba(16, 185, 129, 0.08)',
        'neon-hover': '0 10px 25px -4px rgba(16, 185, 129, 0.5), 0 0 10px 0 rgba(163, 230, 53, 0.4)',
      }
    },
  },
  plugins: [],
}
