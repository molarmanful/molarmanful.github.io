/* eslint no-console: 0, antfu/no-top-level-await: 0 */

import path from 'node:path'
import process from 'node:process'

import sharp from 'sharp'

import { ws } from '../src/common/meta.js'

const [file, out, n] = process.argv.slice(2)
process.env.UV_THREADPOOL_SIZE = n

const img = sharp(file)

const q = []
const q_a = []

for (const w of ws) {
  console.log(`?\t${out} ${w}`)

  const rsz = img.resize({
    w,
    fit: 'inside',
    withoutEnlargement: true,
  })

  q.push(
    rsz.clone().jpeg().toFile(path.resolve(`${out}@${w}.jpg`)),
    rsz.clone().webp().toFile(path.resolve(`${out}@${w}.webp`)),
  )
  q_a.push(
    (x => () =>
      x.toFile(path.resolve(`${out}@${w}.avif`))
    )(rsz.clone().avif()),
  )
}

try {
  await Promise.all(q)
  console.log(`\t,\t${out} jpg,webp`)
  let i = 0
  for (const a of q_a) {
    await a()
    i++
    console.log(`\t,\t${out} avif ${i}/${q_a.length}`)
  }
  console.log(`.\t${out}`)
}
catch (e) {
  console.error(e)
}
