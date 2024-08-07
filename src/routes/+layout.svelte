<script>
  import { setContext } from 'svelte'

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

  let vloader
  if (browser)
    vloader = new IntersectionObserver(
      entries => {
        for (const { isIntersecting, target } of entries) {
          if (isIntersecting) {
            target.load()
            target.autoplay = true
            vloader.unobserve(target)
          }
        }
      },
      { threshold: 0.1 }
    )
  setContext('vloader', vloader)

  if (browser) history.scrollRestoration = 'manual'

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
