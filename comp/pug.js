let fs = require('fs')
let pug = require('pug')

console.log(pug.renderFile('./index.pug', {
  fs: fs
}))
