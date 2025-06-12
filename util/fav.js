/* eslint no-console: 0, antfu/no-top-level-await: 0 */

import fs from 'node:fs/promises'
import path from 'node:path'

import favicons from 'favicons'

import { desc } from '../src/common/meta.js'

const out = path.resolve('public/favicons')

const res = await favicons(path.resolve('public/logo.svg'), {
  path: '/favicons',
  appName: 'Ben Pang',
  shortAppName: 'Ben Pang',
  appDescription: desc,
  background: '#000',
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
  path.resolve('src/lib/Favicons.svelte'),
  res.html.join`\n`,
)
