<script>
  import { onMount, setContext } from 'svelte'

  import { browser } from '$app/environment'
  import Favicons from '$lib/Favicons.svelte'
  import D from '$lib/js/D'

  import '@unocss/reset/tailwind-compat.css'
  import 'uno.css'
  import 'aos/dist/aos.css'
  import '../app.css'

  let { children } = $props()

  let loaded = $state(false)

  setContext('D', D)

  if (browser) {
    history.scrollRestoration = 'manual'
  }

  $effect(() => {
    scrollTo({ top: 0, behavior: 'instant' })
    loaded = true
  })
</script>

<svelte:head>
  <Favicons />
</svelte:head>

<main class={loaded ? 'opacity-100' : 'opacity-0'} ofade-500 overflow-x-clip>
  {@render children()}
</main>
