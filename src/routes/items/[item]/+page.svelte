<script>
  import LazyLoad from 'vanilla-lazyload'
  import { browser } from '$app/environment'
  import { ExtLayout, A } from '$lib/mixins'
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

<ExtLayout>
  <div slot="bar" flex ml-4 h-full>
    <span m-auto>
      <A t un-text="inherit" decoration="none" href="/">ben</A>
      /
      <A t un-text="inherit" decoration="none" href="/items">items</A>
      /
      <A t un-text="inherit" decoration="none" href="/items/{name}">{name}</A>
    </span>
  </div>

  <svelte:component this={module} {D} bind:desc />
</ExtLayout>
