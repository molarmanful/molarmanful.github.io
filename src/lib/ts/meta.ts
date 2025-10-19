import type { Component } from 'svelte'
import type { ImageMetadata } from 'vite-imagetools'

export interface Item {
  title: string
  desc: string
  tags: string[]
  year: number
  default: Component
}

export type Imgs = [Record<string, string>, Record<string, ImageMetadata>]

const makeRecord = <V>(obj: Record<string, V>) =>
  Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [
      k.replace(/^.+\/([^/]+)\.\w+$/, '$1'),
      v,
    ]),
  )

export const title = 'Ben Pang / BandidoJim / Molarmanful'

export const artalt = (name: string) => `Artwork: "${name}" by BandidoJim.`

export const items = makeRecord(import.meta.glob<Item>('$lib/items/*', { eager: true }))

export const sortedKeys = Object.keys(items).sort((a, b) => (items[b].year || 1 / 0) - (items[a].year || 1 / 0))

export const tags = Object.fromEntries(Object.entries(items).map(([k, v]) => [k, new Set(v.tags)]))

export const tagsSet = new Set([...Object.values(tags).reduce((a, b) => a.union(b), new Set())].sort())

export const covers: Imgs = [
  makeRecord(
    import.meta.glob('$lib/covers/*', {
      eager: true,
      import: 'default',
      query: { inline: true, w: 32, h: 32, fit: 'inside', quality: 20, format: 'webp' },
    }),
  ),
  makeRecord(
    import.meta.glob('$lib/covers/*', {
      eager: true,
      import: 'default',
      query: { as: 'meta:height;width' },
    }),
  ),
]

export const art: Imgs = [
  makeRecord(
    import.meta.glob('$lib/art/*', {
      eager: true,
      import: 'default',
      query: { inline: true, w: 32, h: 32, fit: 'inside', quality: 20, format: 'webp' },
    }),
  ),
  makeRecord(
    import.meta.glob('$lib/art/*', {
      eager: true,
      import: 'default',
      query: { as: 'meta:height;width' },
    }),
  ),
]

export const media: Imgs = [
  makeRecord(
    import.meta.glob('$lib/media/*', {
      eager: true,
      import: 'default',
      query: { inline: true, w: 32, h: 32, fit: 'inside', quality: 20, format: 'webp' },
    }),
  ),
  makeRecord(
    import.meta.glob('$lib/media/*', {
      eager: true,
      import: 'default',
      query: { as: 'meta:height;width' },
    }),
  ),
]
