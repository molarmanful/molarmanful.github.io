<script>
  import LazyLoad from 'vanilla-lazyload'
  import { browser } from '$app/environment'
  import { ExtLayout, A, CoverImg } from '$lib/mixins'
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

<ExtLayout>
  <div slot="bar" flex ml-4 h-full>
    <span m-auto>
      <A un-text="inherit" decoration="none" href="/" t>ben</A>
      /
      <A un-text="inherit" decoration="none" href="/items" t>items</A>
    </span>
  </div>

  <div w-full m-auto py-16 container="lg:~">
    <div grid="~ cols-1 sm:cols-2 md:cols-3 lg:cols-4" gap-8>
      {#each [...D.covers].sort(_ => 0.5 - Math.random()) as [name, _]}
        <A href="/items/{name}" t><CoverImg {name} {D} /></A>
      {/each}
    </div>
  </div>
</ExtLayout>
