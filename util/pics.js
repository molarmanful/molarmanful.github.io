/* eslint no-console: 0, antfu/no-top-level-await: 0 */

import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

import sharp from 'sharp'

import { ws } from '../src/common/meta.js'

const [file, out, n, shas] = process.argv.slice(2)
process.env.UV_THREADPOOL_SIZE = n

const img = sharp(file)

const q = []
const q_a = []

const mkhash = async (bufp, out) => {
  const buf = await bufp
  const hash = crypto.createHash('sha256')
  hash.update(buf)
  await Promise.all([
    fs.appendFile(path.resolve(shas), `${JSON.stringify(out)}=${JSON.stringify(hash.digest('base64'))}\n`),
    fs.writeFile(path.resolve(out), buf),
  ])
}

for (const w of ws) {
  console.log(`?\t${out} ${w}`)

  const rsz = img.resize({
    w,
    fit: 'inside',
    withoutEnlargement: true,
  })

  q.push(
    mkhash(rsz.clone().jpeg().toBuffer(), `${out}@${w}.jpg`),
    mkhash(rsz.clone().webp().toBuffer(), `${out}@${w}.webp`),
  )
  q_a.push(
    (x => () =>
      mkhash(x.toBuffer(), `${out}@${w}.avif`)
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
