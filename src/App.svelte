<script>
  import { onMount } from 'svelte'
  import { classList } from 'svelte-body'
  import { fade } from 'svelte/transition'
  import AOS from 'aos'
  import LazyLoad from 'vanilla-lazyload'
  import Filters from './components/Filters.svelte'
  import Nav from './components/Nav.svelte'
  import Header from './components/Header.svelte'
  import Art from './components/Art.svelte'
  import About from './components/About.svelte'
  import Modal from './components/Modal.svelte'

  let loaded = false
  let selected

  let process = (x, r = /^.+\/([\w-]+)\.\w+$/) =>
    new Map(Object.entries(x).map(([a, b]) => [a.replace(r, '$1'), b]))

  let D = {
    covers: process(
      import.meta.glob('./covers/*.x', { eager: true, as: 'url' })
    ),
    tiny: process(
      import.meta.glob('./tiny/*.tiny', { eager: true, as: 'url' })
    ),
    items: process(import.meta.glob('./components/items/*.svelte')),
    art: process(import.meta.glob('./art/*.x', { eager: true, as: 'url' })),
    media: process(import.meta.glob('./media/*', { eager: true, as: 'url' })),
    media_tiny: process(
      import.meta.glob('./media/tiny/*', { eager: true, as: 'url' }),
      /^.+\/([\w-]+)_tiny\.\w+$/
    ),
    lazy: new LazyLoad({
      callback_loaded() {
        AOS.refresh()
      },
    }),
    update() {
      this.lazy.update()
    },
  }

  AOS.init()

  history.scrollRestoration = 'manual'

  onMount(_ => {
    loaded = true
  })
</script>

{#if loaded}
  <main overflow-x-clip in:fade={{ duration: 500 }} class="scanlines">
    <Filters />
    <Nav />
    <Header />
    <About />
    <Art bind:selected {D} />
    <Modal bind:selected {D} />
  </main>
{/if}

<svelte:body use:classList={{ 'overflow-hidden': selected }} />
