/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 80px -20px rgba(37, 99, 235, 0.38)',
        card: '0 1px 2px rgba(28, 25, 23, 0.06), 0 24px 48px -24px rgba(28, 25, 23, 0.1)',
        'card-dark':
          '0 1px 2px rgba(0, 0, 0, 0.2), 0 24px 48px -24px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'grid-slate':
          'linear-gradient(to right, rgb(168 162 158 / 0.09) 1px, transparent 1px), linear-gradient(to bottom, rgb(168 162 158 / 0.09) 1px, transparent 1px)',
        'grid-slate-dark':
          'linear-gradient(to right, rgb(168 162 158 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(168 162 158 / 0.06) 1px, transparent 1px)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 11s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        drift: 'drift 18s ease-in-out infinite',
        'drift-reverse': 'drift 22s ease-in-out infinite reverse',
        marquee: 'marquee 36s linear infinite',
        shimmer: 'shimmer 2.8s ease-in-out infinite',
        'bar-fill': 'barFill 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'gradient-shift': 'gradientShift 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.85' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(10px, -14px) rotate(1deg)' },
          '66%': { transform: 'translate(-8px, 8px) rotate(-1deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        barFill: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        gradientShift: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.06)' },
        },
      },
    },
  },
  plugins: [],
}
