/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        silver: {
          50: '#F8F8F8',
          100: '#F0F0F0',
          200: '#E0E0E0',
          300: '#C0C0C0', // Primary silver
          400: '#A8A8A8',
          500: '#808080',
          600: '#708090', // Dark silver / slate
          700: '#5A5A6A',
          800: '#3A3A4A',
          900: '#1a1a2e', // Navy
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8C547',
          dark: '#C9A227',
        },
        copper: '#B87333',
        bg: {
          dark: '#0f0f14',
          light: '#FAFAF5',
          card: {
            dark: '#1a1a24',
            light: '#ffffff',
          },
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", 'Georgia', 'serif'],
        body: ["'Source Sans 3'", 'sans-serif'],
        arabic: ["'Noto Naskh Arabic'", 'serif'],
        mono: ["'JetBrains Mono'", 'monospace'],
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease both',
        pulse: 'pulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      maxWidth: {
        article: '760px',
        wide: '1200px',
      },
    },
  },
  plugins: [],
};
