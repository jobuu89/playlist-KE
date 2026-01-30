/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kenyan flag colors + accent
        'kenya-black': '#000000',
        'kenya-red': '#BB0000',
        'kenya-green': '#006600',
        'kenya-white': '#FFFFFF',
        // Genre-specific colors
        'gengetone': '#FF6B6B',
        'afropop': '#4ECDC4',
        'benga': '#45B7D1',
        'gospel': '#FFE66D',
        'kapuka': '#95E77E',
        // Primary color palette
        'primary': {
          '50': '#f0f9ff',
          '100': '#e0f2fe',
          '200': '#bae6fd',
          '300': '#7dd3fc',
          '400': '#38bdf8',
          '500': '#0ea5e9',
          '600': '#0284c7',
          '700': '#0369a1',
          '800': '#075985',
          '900': '#0c4a6e',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

