const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const $pug = (x, options={})=> new HtmlWebpackPlugin({
  template: `src/${x}.pug`,
  ...options
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  plugins: [
    new FaviconsWebpackPlugin(),
    new CleanWebpackPlugin({
      verbose: true
    }),
    $pug('index', {
      art: fs.readdirSync('./src/art').map(f=> path.parse(f).name)
    }),
    ...fs.readdirSync('./src/items').filter(f=>
      !~fs.readdirSync('./src/old').map(g=> path.parse(g).name).indexOf(path.parse(f).name)
    ).map(f=> new HtmlWebpackPlugin({
      filename: `${path.parse(f).name}.html`,
      template: `src/items/${f}`
    }))
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/aos/dist')
        ],
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.pug$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['pug-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        include: path.resolve(__dirname, 'src'),
        type: 'asset'
      },
      {
        include: [
          path.resolve(__dirname, 'src', 'art'),
          path.resolve(__dirname, 'src', 'thumbnails'),
          path.resolve(__dirname, 'src', 'tiny'),
        ],
        type: 'asset/resource'
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
  },
}
