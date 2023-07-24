<script>
  import { onMount } from 'svelte'

  import { browser } from '$app/environment'
  import Favicons from '$lib/Favicons.svelte'

  import '@unocss/reset/tailwind-compat.css'
  import 'uno.css'
  import 'aos/dist/aos.css'
  import '../app.css'

  let loaded = false

  if (browser) {
    history.scrollRestoration = 'manual'
  }

  onMount(() => {
    requestAnimationFrame(() => {
      scrollTo(0, 0)
      loaded = true
    })
  })
</script>

<svelte:head>
  <Favicons />
</svelte:head>

<main overflow-x-clip ofade-500 class={loaded ? 'opacity-100' : 'opacity-0'}>
  <slot />
</main>
