<script lang='ts'>
  import { afterNavigate, onNavigate } from '$app/navigation'
  import { onMount, type Snippet } from 'svelte'

  import Favicons from './Favicons.svelte'
  import Nav from './Nav.svelte'

  import 'core-js/proposals/set-methods-v2'
  import '../app.css'

  interface Props {
    children: Snippet
  }

  const { children }: Props = $props()

  let loaded = $state(false)

  onNavigate(async () => {
    loaded = false
    await new Promise(res => setTimeout(res, 300))
  })

  const load = () => requestAnimationFrame(() => loaded = true)
  onMount(load)
  afterNavigate(load)
</script>

<svelte:head>
  <Favicons />
</svelte:head>

<main
  class={[
    'transition-opacity',
    !loaded && 'not-noscript:opacity-[0.01%]',
  ]}
>
  <Nav />

  {@render children()}
</main>
