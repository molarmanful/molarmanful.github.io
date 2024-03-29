let makeMap = (x, { r = /^.+\/([\w-]+)\.\w+$/ } = {}) =>
  new Map(Object.entries(x).map(([a, b]) => [a.replace(r, '$1'), b]))

export default {
  covers: makeMap(
    import.meta.glob('$lib/covers/*', { eager: true, as: 'url' })
  ),
  covers_tiny: makeMap(
    import.meta.glob('$lib/covers/*', {
      eager: true,
      import: 'default',
      query: { w: 32, quality: 50 },
    })
  ),
  art: makeMap(import.meta.glob('$lib/art/*', { eager: true, as: 'url' })),
  art_tiny: makeMap(
    import.meta.glob('$lib/art/*', {
      eager: true,
      import: 'default',
      query: { w: 32, quality: 50 },
    })
  ),
  media: makeMap(import.meta.glob('$lib/media/*', { eager: true, as: 'url' })),
  media_tiny: makeMap(
    import.meta.glob('$lib/media/*', {
      eager: true,
      import: 'default',
      query: { w: 32, quality: 50 },
    })
  ),
  items: makeMap(import.meta.glob('$lib/items/*')),
}
