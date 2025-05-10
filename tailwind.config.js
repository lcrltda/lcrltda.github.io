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
      sans: ['Mulish', 'sans-serif'],      // Corpo do texto (substitui IBM Plex Sans)
      heading: ['Raleway', 'sans-serif'],  // Títulos (substitui Cormorant Garamond)
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