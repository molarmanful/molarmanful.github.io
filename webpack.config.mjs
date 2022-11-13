import path from 'path'
import fs from 'fs'
import CopyPlugin from 'copy-webpack-plugin'
import PugPlugin from 'pug-plugin'

let dir = x => new URL(x, import.meta.url).pathname

export default {
  entry:
    fs.readdirSync('./src/items').reduce((o, f) => (
      o[path.parse(f).name] = './src/items/' + f,
      o
    ), {
      index: './src/index.pug'
    }),
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/favicons' },
      ],
    }),
    new PugPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/i,
        include: dir('src'),
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
          dir('src'),
          dir('node_modules/aos/dist'),
        ],
        type: 'asset/resource',
        use: 'postcss-loader',
      },
      {
        test: /\.js$/i,
        include: dir('src'),
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        include: dir('src'),
        type: 'asset'
      },
      {
        include: [
          dir('src/covers'),
          dir('src/art'),
          dir('src/old'),
          dir('src/thumbnails'),
          dir('src/tiny'),
        ],
        type: 'asset/resource'
      },
    ],
  },
  devServer: {
    static: dir('dist'),
  },
}
