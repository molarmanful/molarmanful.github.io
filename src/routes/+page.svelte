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
  import D from '$lib/js/D'
  import { browser } from '$app/environment'

  import '@unocss/reset/tailwind-compat.css'
  import 'uno.css'
  import 'aos/dist/aos.css'
  import '../app.css'

  let loaded = false
  let tops = []
  let selected

  if (browser) {
    history.scrollRestoration = 'manual'
    AOS.init()
    D.lazy = new LazyLoad({
      callback_loaded() {
        AOS.refresh()
      },
    })
    D.update = _ => {
      D.lazy.update()
    }
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
