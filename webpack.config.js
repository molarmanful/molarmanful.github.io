const path = require('path')
const fs = require('fs')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const PugPlugin = require('pug-plugin')

module.exports = {
  entry:
    fs.readdirSync('./src/items').reduce((o, f) => (
      o[path.parse(f).name] = './src/items/' + f,
      o
    ), {
      index: './src/index.pug'
    }),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new FaviconsWebpackPlugin(),
    new CleanWebpackPlugin({
      verbose: true
    }),
    new PugPlugin({
      verbose: true
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/i,
        include: path.resolve(__dirname, 'src'),
        loader: PugPlugin.loader,
        options: {
          data: {
            art: fs.readdirSync('./src/art').map(f => path.parse(f).name),
            covers: fs.readdirSync('./src/covers').map(f => path.parse(f).name),
            TINY: x => `../tiny/${x}.tiny`,
            MTINY: (x, y = 'png') => `../media/tiny/${x}_tiny.${y}`,
            ART: x => `../art/${x}.x`,
            OLD: x => `../old/${x}.x`,
            MEDIA: (x, y = 'png') => `../media/${x}.${y}`,
          },
        },
      },
      {
        test: /\.css$/i,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/aos/dist')
        ],
        type: 'asset/resource',
        use: 'postcss-loader',
      },
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        include: path.resolve(__dirname, 'src'),
        type: 'asset'
      },
      {
        include: [
          path.resolve(__dirname, 'src', 'covers'),
          path.resolve(__dirname, 'src', 'art'),
          path.resolve(__dirname, 'src', 'old'),
          path.resolve(__dirname, 'src', 'thumbnails'),
          path.resolve(__dirname, 'src', 'tiny'),
        ],
        type: 'asset/resource'
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
  },
}
