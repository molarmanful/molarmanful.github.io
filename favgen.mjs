import fs from 'fs/promises'
import { favicons } from 'favicons'

const fav = await favicons('./logo.png')
fs.writeFile('./src/fav.pug', fav.html.join`\n`)
fs.writeFile('./src/favicons/manifest.webmanifest', fav.files[0].contents)
for (let f of fav.images)
  fs.writeFile('./src/favicons/' + f.name, f.contents)