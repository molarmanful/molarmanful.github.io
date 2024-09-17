import type { Component } from 'svelte'
import type { ImageMetadata } from 'vite-imagetools'

export interface Item {
  desc: string
  tags: string[]
  year: number
  default: Component
}

type Imgs = [Map<string, string>, Map<string, ImageMetadata>]

interface DType {
  title: string
  items: typeof items
  tags: Map<string, Set<string>>
  covers: Imgs
  art: Imgs
  media: Imgs
}

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

const items = makeMap(import.meta.glob<Item>('$lib/items/*', { eager: true }))

const D: DType = {
  title: 'Ben Pang / BandidoJim / Molarmanful',
  items,
  tags: new Map([...items].map(([k, v]) => [k, new Set(v.tags)])),
  covers: [
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
  ],
  art: [
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
  ],
  media: [
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
  ],
}

export default D
