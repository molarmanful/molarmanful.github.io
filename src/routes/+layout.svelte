<script lang='ts'>
  import '../app.css'
  import 'core-js/proposals/set-methods-v2'
  import { afterNavigate, onNavigate } from '$app/navigation'
  import { onMount, type Snippet } from 'svelte'

  import Favicons from './Favicons.svelte'
  import Nav from './Nav.svelte'

  interface Props {
    children?: Snippet
  }

  const { children }: Props = $props()

  let isLoaded = $state(false)

  onNavigate(async () => {
    isLoaded = false
    await new Promise(res => setTimeout(res, 300))
  })

  const load = () => requestAnimationFrame(() => isLoaded = true)
  onMount(load)
  afterNavigate(load)
</script>

<svelte:head>
  <Favicons />
</svelte:head>

<main
  class={[
    'transition-opacity',
    !isLoaded && 'not-noscript:opacity-[0.01%]',
  ]}
>
  <Nav />

  {@render children?.()}
</main>
