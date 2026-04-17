/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rustic: {
          50: '#fdfbf9', // Creme/Off-white
          100: '#f5f0ea',
          800: '#5c4a44', // Dark warm brown
          900: '#3e302b',
        },
        navy: {
          800: '#1e293b',
          900: '#0f172a',
        },
        terracotta: {
          400: '#e07a5f',
          500: '#d56042',
        },
        gold: {
          300: '#f6d365',
          400: '#e5b94e',
          500: '#d4af37', // metallic gold
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      backgroundImage: {
        'paper-texture': "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
        'fabric-texture': "url('https://www.transparenttextures.com/patterns/white-canvas.png')",
      }
    },
  },
  plugins: [],
}
