<script>
  import { onMount } from 'svelte'
  import { classList } from 'svelte-body'
  import AOS from 'aos'
  import Favicons from '$lib/Favicons.svelte'
  import Filters from '$lib/Filters.svelte'
  import Nav from '$lib/Nav.svelte'
  import Header from '$lib/Header.svelte'
  import Art from '$lib/Art.svelte'
  import About from '$lib/About.svelte'
  import Modal from '$lib/Modal.svelte'
  import LazyLoad from 'vanilla-lazyload'
  import { browser } from '$app/environment'

  import '@unocss/reset/tailwind-compat.css'
  import 'uno.css'
  import 'aos/dist/aos.css'
  import '../app.css'

  let loaded = false
  let tops = []
  let selected

  let process = (x, { r = /^.+\/([\w-]+)\.\w+$/ } = {}) =>
    new Map(Object.entries(x).map(([a, b]) => [a.replace(r, '$1'), b]))

  let D = {
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
    lazy: { update() {} },
    update() {
      this.lazy.update()
    },
  }

  if (browser) {
    history.scrollRestoration = 'manual'
    AOS.init()
    D.lazy = new LazyLoad({
      callback_loaded() {
        AOS.refresh()
      },
    })
  }

  onMount(_ => {
    requestAnimationFrame(_ => {
      scrollTo(0, 0)
      loaded = true
    })
  })
</script>

<svelte:head>
  <title>Ben Pang</title>
  <meta
    name="description"
    content="Programmer/artist and graduate student at NYU ITP."
  />
  <Favicons />
</svelte:head>

<svelte:body use:classList={[selected && 'overflow-hidden']} />

<main
  overflow-x-clip
  scanlines
  ofade-500
  class={loaded ? 'opacity-100' : 'opacity-0'}
>
  <Filters />
  <Nav {tops} />
  <Header bind:top={tops[0]} />
  <About bind:top={tops[1]} />
  <Art bind:top={tops[2]} bind:selected {D} />
  <Modal bind:selected {D} />
</main>
