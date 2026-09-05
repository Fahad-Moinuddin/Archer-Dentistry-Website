/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A1E3F',
          'navy-light': '#142C54',
          'navy-dark': '#061328',
          gold: '#C59B27',
          'gold-light': '#D4AF37',
          'gold-soft': '#FBF6E9',
          'gold-dark': '#A47D18',
          teal: '#0284C7',
          'teal-light': '#E0F2FE',
          'teal-dark': '#0369A1',
          accent: '#0D9488',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(10, 30, 63, 0.08)',
        'card': '0 10px 30px -5px rgba(10, 30, 63, 0.1)',
        'gold-glow': '0 4px 25px rgba(197, 155, 39, 0.35)',
      }
    },
  },
  plugins: [],
}
