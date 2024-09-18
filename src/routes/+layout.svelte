<script lang='ts'>
  import type { Snippet } from 'svelte'
  import { SvelteSet } from 'svelte/reactivity'

  import type { Snapshot } from './$types'

  import { browser } from '$app/environment'
  import { Favicons } from '$lib'
  import AOS from '$lib/js/aos.svelte'
  import { cD } from '$lib/js/contexts'
  import D from '$lib/js/D'
  import { fadeonly, redmote, sfactor } from '$lib/js/util.svelte'

  import '@unocss/reset/tailwind-compat.css'
  import 'uno.css'
  import '../app.css'

  interface Props {
    children: Snippet
  }

  const { children }: Props = $props()

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

  const { aos, batch } = new AOS().fns

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
    aos,
    batch,
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

<!-- <Cursor {cursorFs} {mouse} z="100" /> -->
<!-- <div scanlines text-bord></div> -->
<span class='pointer-events-none fixed select-none text-.01px' aria-hidden='true'>
  LIGHTHOUSE, WHY MUST YOU DO THIS TO ME???
</span>

<main class="{loaded.x ? 'opacity-100 ofade-500' : 'opacity-0'} overflow-x-clip">
  {@render children()}
</main>
