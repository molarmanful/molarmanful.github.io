import fs from 'fs/promises'
import { favicons } from 'favicons'

const fav = await favicons('./logo.png', {
  appName: 'Ben Pang',
  appDescription: 'Programmer/artist and graduate student at NYU ITP.',
  background: '#fff',
  theme_color: 'black',
})
fs.writeFile('./src/fav.pug', fav.html.join`\n`)
fs.writeFile('./src/favicons/manifest.webmanifest', fav.files[0].contents)
for (let f of fav.images)
  fs.writeFile('./src/favicons/' + f.name, f.contents)