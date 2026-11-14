import type { Imgs } from '#lib/ts/meta.ts'

import hash from '#common/hashes/covers.json'
import { makeRecord } from '#lib/ts/record.ts'

export const covers: Imgs = {
  lqip: makeRecord(import.meta.glob<string>('#lib/covers/*', {
    eager: true,
    import: 'default',
    query: {
      inline: true,
      w: 32,
      h: 32,
      fit: 'inside',
      quality: 20,
      format: 'webp',
    },
  })),
  size: makeRecord(import.meta.glob<{ width: number; height: number }>(
    '#lib/covers/*',
    {
      eager: true,
      import: 'default',
      query: { as: 'meta:height;width' },
    },
  )),
  hash,
}
