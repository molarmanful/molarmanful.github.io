<script>
  import LazyLoad from 'vanilla-lazyload'
  import { browser } from '$app/environment'
  import { ArtGrid, A, CoverImg } from '$lib/mixins'
  import D from '$lib/js/D'
  import { onMount } from 'svelte'

  if (browser) {
    D.lazy = new LazyLoad()
    D.update = _ => {
      D.lazy.update()
    }
  }

  onMount(_ => {
    D.update()
  })
</script>

<svelte:head>
  <title>items | Ben Pang</title>
</svelte:head>

<div w-full m-auto p="x-5 y-5 lg:y-16" container="lg:~">
  <ArtGrid {D} let:covers>
    {#each covers as [name, _]}
      <A href="/items/{name}" t><CoverImg {name} {D} /></A>
    {/each}
  </ArtGrid>
</div>
