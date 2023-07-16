let process = (x, { r = /^.+\/([\w-]+)\.\w+$/ } = {}) =>
  new Map(Object.entries(x).map(([a, b]) => [a.replace(r, '$1'), b]))

export default {
  covers: process(
    import.meta.glob('$lib/covers/*', { eager: true, as: 'url' })
  ),
  covers_tiny: process(
    import.meta.glob('$lib/covers/*', {
      eager: true,
      import: 'default',
      query: { w: 32, h: 32, fit: 'contain', quality: 50 },
    })
  ),
  art: process(import.meta.glob('$lib/art/*', { eager: true, as: 'url' })),
  art_tiny: process(
    import.meta.glob('$lib/art/*', {
      eager: true,
      import: 'default',
      query: { w: 32, h: 32, fit: 'contain', quality: 50 },
    })
  ),
  media: process(
    import.meta.glob('$lib/media/*', { eager: true, as: 'url' })
  ),
  media_tiny: process(
    import.meta.glob('$lib/media/*', {
      eager: true,
      import: 'default',
      query: { w: 32, h: 32, fit: 'contain', quality: 50 },
    })
  ),
  items: process(import.meta.glob('$lib/items/*')),
}