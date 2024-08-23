<script>
  import { setContext } from 'svelte'
  import { SvelteSet } from 'svelte/reactivity'

  import { browser } from '$app/environment'
  import Favicons from '$lib/Favicons.svelte'
  import AOS from '$lib/js/aos.svelte'
  import D from '$lib/js/D'
  import { sfactor } from '$lib/js/util.svelte'
  import '@unocss/reset/tailwind-compat.css'
  import 'uno.css'
  import 'aos/dist/aos.css'
  import '../app.css'

  const { children } = $props()

  const loaded = $state({ x: false })

  const actives = $state({ x: new SvelteSet() })
  export const snapshot = {
    capture: () => [...actives.x],
    restore: x => (actives.x = new SvelteSet(x)),
  }

  const factor = $state({ x: 0 })
  sfactor(x => (factor.x = x))

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

  let aos = new AOS()

  setContext('D', { D, loaded, actives, factor, vloader, aos })

  if (browser) {
    history.scrollRestoration = 'manual'
  }

  $effect(() => {
    aos.init()
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
