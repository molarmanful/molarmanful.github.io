module.exports = {
  mode: 'jit',
  content: [
    './src/*.pug',
    './src/items/*.pug'
  ],
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
