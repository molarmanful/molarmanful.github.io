<script>
  import LazyLoad from 'vanilla-lazyload'
  import { browser } from '$app/environment'
  import D from '$lib/js/D'

  export let data
  let { name, module } = data
  let desc

  if (browser) {
    D.lazy = new LazyLoad()
    D.update = _ => {
      D.lazy.update()
    }
  }
</script>

<svelte:head>
  <title>{name} | Ben Pang</title>
  <meta name="description" content={desc} />
</svelte:head>

<svelte:component this={module} {D} bind:desc />
