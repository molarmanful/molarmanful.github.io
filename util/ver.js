/* eslint no-console: 0, antfu/no-top-level-await: 0 */

import fs from 'node:fs/promises'
import process from 'node:process'

const [x, name] = process.argv.slice(2)
const hashes = JSON.parse(await fs.readFile('src/common/hashes.json'))
hashes[x][name] = hashes[x][name] ? hashes[x][name] + 1 : 0
await fs.writeFile('src/common/hashes.json', `${JSON.stringify(hashes, null, 2)}\n`)
process.stdout.write(`${hashes[x][name]}`)
