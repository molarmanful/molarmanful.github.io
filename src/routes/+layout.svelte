<script lang='ts'>
  import type { Snippet } from 'svelte'

  import { afterNavigate, onNavigate } from '$app/navigation'

  import Favicons from './Favicons.svelte'
  import Nav from './Nav.svelte'

  import 'core-js/actual'
  import 'uno.css'
  import '../app.css'

  interface Props {
    children: Snippet
  }

  const { children }: Props = $props()

  let loaded = $state(false)

  onNavigate(async () => {
    loaded = false
    return new Promise(res => setTimeout(res, 300))
  })

  afterNavigate(() => {
    requestAnimationFrame(() => {
      loaded = true
    })
  })
</script>

<svelte:head>
  <Favicons />
</svelte:head>

<main class="transition-opacity-300 {loaded ? 'opacity-100' : '[html:not(.noscript)_&]:opacity-1'}">
  <Nav />

  {@render children()}
</main>
