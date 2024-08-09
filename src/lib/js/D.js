const makeMap = (x, { r = /^.+\/([\w-]+)\.\w+$/ } = {}) =>
  new Map(Object.entries(x).map(([a, b]) => [a.replace(r, '$1'), b]))

export default {
  covers: makeMap(
    import.meta.glob('$lib/covers/*', {
      eager: true,
      import: 'default',
      query: { url: true, as: 'run:32' },
    })
  ),
  art: makeMap(
    import.meta.glob('$lib/art/*', {
      eager: true,
      import: 'default',
      query: { url: true, as: 'run:32' },
    })
  ),
  media: makeMap(
    import.meta.glob('$lib/media/*', {
      eager: true,
      import: 'default',
      query: { url: true, as: 'run:32' },
    })
  ),
  items: makeMap(import.meta.glob('$lib/items/*', { eager: true })),
}
