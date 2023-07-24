import fs from 'fs/promises'
import path from 'path'
import url from 'url'

import favicons from 'favicons'

let cwd = url.fileURLToPath(new URL('.', import.meta.url))
let out = path.resolve(cwd, '../static/favicons')

let res = await favicons(path.resolve(cwd, '../static/logo.png'), {
  path: '/favicons',
  appName: 'Ben Pang',
  shortAppName: 'Ben Pang',
  appDescription: 'Programmer/artist and graduate student at NYU ITP.',
  theme_color: '#000',
  appleStatusBarStyle: 'black',
})

await fs.rm(out, {recursive: true, force: true})
await fs.mkdir(out)

await Promise.all(
  [...res.images, ...res.files].map(async f =>
    await fs.writeFile(path.join(out, f.name), f.contents)
  )
)

await fs.writeFile(path.resolve(cwd, '../src/lib/Favicons.svelte'), res.html.join`\n`)