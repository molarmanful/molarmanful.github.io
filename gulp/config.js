const {nodeResolve} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')

const fs = require('fs')
const path = require('path')


module.exports = {
  paths: {
    src: 'src',
    build: 'dist',
    pug: {
      src: '**/*.pug',
      head: 'head.pug',
      foot: 'foot.pug',
      build: '',
    },
    postcss: {
      src: 'style.css',
      build: 'css',
    },
    rollup: {
      src: 'index.js',
      build: 'js',
    },
    favicons: {
      src: '../logo.png',
      build: 'favicons',
    },
    images: {
      src: ['**/*.png', '**/*.svg', '**/*.jpg', '**/*.gif'],
      build: 'media',
    }
  },
  settings: {
    pug: {
      basedir: 'src',
      locals: {
        art: fs.readdirSync('src/art').map(f=> path.parse(f).name),
      },
    },
    rollup: {
      input: 'src/index.js',
      output: {format: 'iife'},
      plugins: [
        nodeResolve(),
        commonjs()
      ]
    },
    server: {
      port: 8080,
    }
  }
}
