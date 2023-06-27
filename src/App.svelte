<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import AOS from 'aos'
  import LazyLoad from 'vanilla-lazyload'
  import Nav from './components/Nav.svelte'
  import Header from './components/Header.svelte'
  import Art from './components/Art.svelte'
  import About from './components/About.svelte'
  import Filters from './components/Filters.svelte'

  let loaded = false

  let process = x =>
    new Map(
      Object.entries(x).map(([a, b]) => [
        a.replace(/^.+\/(\w+)\.\w+$/, '$1'),
        b,
      ])
    )

  let covers = process(
    import.meta.glob('./covers/*.x', { eager: true, as: 'url' })
  )
  let tiny = process(
    import.meta.glob('./tiny/*.tiny', { eager: true, as: 'url' })
  )

  AOS.init()

  let lazy = new LazyLoad({
    callback_loaded() {
      AOS.refresh()
    },
  })

  history.scrollRestoration = 'manual'

  onMount(_ => {
    loaded = true
  })
</script>

{#if loaded}
  <main in:fade={{ duration: 500 }} overflow-x-hidden class="scanlines">
    <Filters />
    <Nav />
    <Header />
    <About />
    <Art {covers} {tiny} {lazy} />
  </main>
{/if}
