<script>
  import { onMount } from 'svelte'
  import { browser } from '$app/environment'
  import LazyLoad from 'vanilla-lazyload'
  import { ArtGrid, A, CoverImg } from '$lib/mixins'
  import D from '$lib/js/D'

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
  <ArtGrid>
    {#each D.covers as [name, _]}
      <A href="/items/{name}" t><CoverImg {D} {name} /></A>
    {/each}
  </ArtGrid>
</div>
