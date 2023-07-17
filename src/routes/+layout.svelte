<script>
  import { onMount, setContext } from 'svelte'
  import Favicons from '$lib/Favicons.svelte'
  import { browser } from '$app/environment'

  import '@unocss/reset/tailwind-compat.css'
  import 'uno.css'
  import 'aos/dist/aos.css'
  import '../app.css'
  import { writable } from 'svelte/store'

  let loaded = false

  let scanS = writable(false)
  let scan
  scanS.subscribe(s => {
    scan = s
  })
  setContext('scan', scanS)

  if (browser) {
    history.scrollRestoration = 'manual'
  }

  onMount(_ => {
    requestAnimationFrame(_ => {
      scrollTo(0, 0)
      loaded = true
    })
  })
</script>

<svelte:head>
  <Favicons />
</svelte:head>

<main
  overflow-x-clip
  scanlines={scan ? '' : void 0}
  ofade-500
  class={loaded ? 'opacity-100' : 'opacity-0'}
>
  <slot />
</main>
