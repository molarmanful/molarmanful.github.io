module.exports = {
  plugins: [
    require('postcss-preset-env'),
    require('postcss-import')({
      path: ['..']
    }),
    require('tailwindcss'),
    require('cssnano')({
      preset: 'default'
    })
  ],
}
