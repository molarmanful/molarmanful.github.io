<script>
  import { setContext } from 'svelte'
  import { SvelteSet } from 'svelte/reactivity'

  import { browser } from '$app/environment'
  import Favicons from '$lib/Favicons.svelte'
  import D from '$lib/js/D'
  import { sfactor } from '$lib/js/util.svelte'
  import '@unocss/reset/tailwind-compat.css'
  import 'uno.css'
  import 'aos/dist/aos.css'
  import '../app.css'

  const { children } = $props()

  setContext('D', D)

  const loaded = $state({ x: false })
  setContext('loaded', loaded)

  const actives = $state({ x: new SvelteSet() })
  export const snapshot = {
    capture: () => [...actives.x],
    restore: x => (actives.x = new SvelteSet(x)),
  }
  setContext('actives', actives)

  const factor = $state({ x: 0 })
  sfactor(x => (factor.x = x))
  setContext('factor', factor)

  let vloader
  if (browser)
    vloader = new IntersectionObserver(
      entries => {
        for (const { isIntersecting, target } of entries)
          if (isIntersecting) {
            target.load()
            target.autoplay = true
            vloader.unobserve(target)
          }
      },
      { threshold: 0.1 }
    )
  setContext('vloader', vloader)

  if (browser) {
    history.scrollRestoration = 'manual'
  }

  $effect(() => {
    scrollTo({ top: 0, behavior: 'instant' })
    loaded.x = true
  })
</script>

<svelte:head>
  <Favicons />
</svelte:head>

<div scanlines text-bord></div>

<main class={loaded.x ? 'opacity-100' : 'opacity-0'} ofade-500 overflow-x-clip>
  {@render children()}
</main>
