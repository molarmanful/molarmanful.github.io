<script lang='ts'>
  import { SvelteSet } from 'svelte/reactivity'

  import type { Snapshot } from './$types'

  import { browser } from '$app/environment'
  import Favicons from '$lib/Favicons.svelte'
  import AOS from '$lib/js/aos.svelte'
  import { cD } from '$lib/js/contexts'
  import D from '$lib/js/D'
  import { fadeonly, redmote, sfactor } from '$lib/js/util.svelte'

  import '@unocss/reset/tailwind-compat.css'
  import 'uno.css'
  import 'aos/dist/aos.css'
  import '../app.css'

  const { children } = $props()

  const loaded = $state({ x: false })

  const actives: { x: SvelteSet<string> } = $state({ x: new SvelteSet() })
  export const snapshot: Snapshot<string[]> = {
    capture: () => [...actives.x],
    restore: x => (actives.x = new SvelteSet(x)),
  }

  const factor = $state({ x: 0 })
  sfactor(x => (factor.x = x))

  const fo = fadeonly()
  const rm = redmote()

  let vloader: IntersectionObserver | undefined
  if (browser) {
    vloader = new IntersectionObserver(
      (entries) => {
        for (const { isIntersecting, target } of entries) {
          if (!isIntersecting)
            continue
          const t = target as HTMLVideoElement
          t.load()
          t.autoplay = true
          vloader?.unobserve(t)
        }
      },
      { threshold: 0.1 },
    )
  }

  const aos = new AOS()

  const mouse: Mouse = $state({
    x: 0.5,
    y: 0.5,
    px: 0,
    py: 0,
    stop: false,
    on: false,
  })

  let innerWidth = $state(0)
  let innerHeight = $state(0)

  const cursorFs = {
    on() {},
    off() {},
  }

  cD.set({
    D,
    loaded,
    actives,
    factor,
    fo,
    rm,
    vloader,
    aos,
    mouse,
    cursorFs,
  })

  if (browser) {
    history.scrollRestoration = 'manual'
  }

  $effect(() => {
    scrollTo({ top: 0, behavior: 'instant' })
    loaded.x = true
  })
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<svelte:head>
  <Favicons />
</svelte:head>

<svelte:body
  onmouseenter={() => (mouse.on = true)}
  onmouseleave={() => (mouse.on = false)}
  onmousemove={({ clientX, clientY }: MouseEvent) => {
    if (fo?.matches || mouse.stop)
      return
    setTimeout(() => {
      mouse.px = clientX
      mouse.py = clientY
      mouse.x = clientX / innerWidth
      mouse.y = clientY / innerHeight
      mouse.stop = false
    }, 50)
    mouse.on = true
    mouse.stop = true
  }}
/>

<!-- <Cursor {cursorFs} {mouse} z="100" /> -->
<!-- <div scanlines text-bord></div> -->

<main class="{loaded.x ? 'opacity-100' : 'opacity-0'} ofade-500 overflow-x-clip">
  {@render children()}
</main>
