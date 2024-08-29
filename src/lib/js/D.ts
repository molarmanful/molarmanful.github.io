import type { Component } from 'svelte'

interface Item {
  desc: string
  tags: string[]
  year: number
  default: Component
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

export default {
  title: 'Ben Pang / BandidoJim / Molarmanful',
  covers: makeMap<string>(
    import.meta.glob('$lib/covers/*', {
      eager: true,
      import: 'default',
      query: { url: true, as: 'run:32' },
    }),
    x =>
      x.sort(([a], [b]) =>
        (items.get(b)?.year || 1 / 0) - (items.get(a)?.year || 1 / 0),
      ),
  ),
  items,
  tags: new Map([...items].map(([k, v]) => [k, new Set(v.tags)])),
  art: makeMap(
    import.meta.glob<string>('$lib/art/*', {
      eager: true,
      import: 'default',
      query: { url: true, as: 'run:32' },
    }),
  ),
  media: makeMap(
    import.meta.glob<string>('$lib/media/*', {
      eager: true,
      import: 'default',
      query: { url: true, as: 'run:32' },
    }),
  ),
}
