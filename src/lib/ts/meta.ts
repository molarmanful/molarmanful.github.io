import { items } from '#lib/ts/items.ts'

export interface Imgs {
  lqip: Record<string, string>
  size: Record<string, { width: number; height: number }>
  hash: Record<string, string>
}

export const title = 'Ben Pang / BandidoJim / Molarmanful'

export const artalt = (name: string) => `Artwork: "${name}" by BandidoJim.`

export const sortedKeys = Object.keys(items).toSorted((a, b) =>
  (items[b].year || 1 / 0) - (items[a].year || 1 / 0)
)

export const tags = Object.fromEntries(
  Object.entries(items).map(([k, v]) => [k, new Set(v.tags)]),
)

export const tagsSet = new Set(
  [...Object.values(tags).reduce((a, b) => a.union(b), new Set())]
    .toSorted((a, b) => a.localeCompare(b)),
)
