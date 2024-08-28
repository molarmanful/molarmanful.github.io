import fs from 'node:fs/promises'
import path from 'node:path'
import url from 'node:url'

import favicons from 'favicons'

const cwd = url.fileURLToPath(new URL('.', import.meta.url))
const out = path.resolve(cwd, '../static/favicons')

const res = await favicons(path.resolve(cwd, '../static/logo.png'), {
  path: '/favicons',
  appName: 'Ben Pang',
  shortAppName: 'Ben Pang',
  appDescription: 'Programmer/artist and graduate student at NYU ITP.',
  theme_color: '#000',
  appleStatusBarStyle: 'black',
})

await fs.rm(out, { recursive: true, force: true })
await fs.mkdir(out)

await Promise.all(
  [...res.images, ...res.files].map(
    async f => await fs.writeFile(path.join(out, f.name), f.contents),
  ),
)

await fs.writeFile(
  path.resolve(cwd, '../src/lib/Favicons.svelte'),
  res.html.join`\n`,
)
