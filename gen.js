const fs = require('fs')
const path = require('path')

let template = x=> `include template.pug\n\n+set('title') \n+set('info') \n+set('desc') \n+layout('${x}')`
let items = fs.readdirSync('src/items')
console.log(items)

fs.readdirSync('src/art').map(f=>{
  let name = path.parse(f).name
  if(items.every(f=> f != `${name}.pug`)){
    console.log(`${name}.pug`)
    fs.writeFile(`src/items/${name}.pug`, template(name), _=>{})
  }
})
