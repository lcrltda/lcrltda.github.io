/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    '*.html',
    '_layouts/**/*.html',
    '_includes/**/*.html'
  ],
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],     // Texto normal (substitui Raleway)
      heading: ['Cormorant Garamond', 'serif'],  // Títulos
      raleway: ['Raleway', 'sans-serif']         // Mantém para compatibilidade (opcional)
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}