module.exports = {
  purge: [
    './src/index.pug',
    './src/items/*.pug'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      syne: 'Syne, sans-serif',
      tri: 'Trispace, sans-serif',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/aspect-ratio')
  ],
}
