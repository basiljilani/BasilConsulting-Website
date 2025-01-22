/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
        display: ['Lexend', 'Inter var', 'system-ui', 'sans-serif'],
        russo: ['Russo One', 'system-ui', 'sans-serif'],
        lato: ['Lato', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#0F172A',
        card: '#1E293B',
        'gray-400': '#94A3B8',
        'emerald-500': '#10B981',
        'emerald-600': '#059669',
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#1e40af',
          600: '#0f2980',
          700: '#0c1f5e',
          800: '#091544',
          900: '#060c2b',
        },
      },
    },
  },
  plugins: [],
};