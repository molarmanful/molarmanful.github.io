import type { Component } from 'svelte'
import type { ImageMetadata } from 'vite-imagetools'

export interface Item {
  title: string
  desc: string
  tags: string[]
  year: number
  default: Component
}

export type Imgs = [Map<string, string>, Map<string, ImageMetadata>]

const makeMap = <T>(
  x: { [k: string]: T },
  f = (x: [string, T][]): [string, T][] => x,
) =>
  new Map(f(
    Object.entries(x).map(([a, b]) => [
      a.replace(/^.+\/([^/]+)\.\w+$/, '$1'),
      b,
    ]),
  ))

export const title = 'Ben Pang / BandidoJim / Molarmanful'

export const items = makeMap(import.meta.glob<Item>('$lib/items/*', { eager: true }))

export const tags = new Map([...items].map(([k, v]) => [k, new Set(v.tags)]))

export const tagsSet = new Set([...tags.values().reduce((a, b) => a.union(b), new Set())].sort())

export const covers: Imgs = [
  makeMap(
    import.meta.glob('$lib/covers/*', {
      eager: true,
      import: 'default',
      query: { inline: true, w: 32, h: 32, fit: 'inside', quality: 20, format: 'webp' },
    }),
    x =>
      x.sort(([a], [b]) =>
        (items.get(b)?.year || 1 / 0) - (items.get(a)?.year || 1 / 0),
      ),
  ),
  makeMap(
    import.meta.glob('$lib/covers/*', {
      eager: true,
      import: 'default',
      query: { as: 'meta:height;width' },
    }),
  ),
]

export const art: Imgs = [
  makeMap(
    import.meta.glob('$lib/art/*', {
      eager: true,
      import: 'default',
      query: { inline: true, w: 32, h: 32, fit: 'inside', quality: 20, format: 'webp' },
    }),
  ),
  makeMap(
    import.meta.glob('$lib/art/*', {
      eager: true,
      import: 'default',
      query: { as: 'meta:height;width' },
    }),
  ),
]

export const media: Imgs = [
  makeMap(
    import.meta.glob('$lib/media/*', {
      eager: true,
      import: 'default',
      query: { inline: true, w: 32, h: 32, fit: 'inside', quality: 20, format: 'webp' },
    }),
  ),
  makeMap(
    import.meta.glob('$lib/media/*', {
      eager: true,
      import: 'default',
      query: { as: 'meta:height;width' },
    }),
  ),
]
