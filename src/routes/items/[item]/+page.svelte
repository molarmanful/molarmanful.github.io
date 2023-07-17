<script>
  import LazyLoad from 'vanilla-lazyload'
  import { browser } from '$app/environment'
  import { ExtLayout, A } from '$lib/mixins'
  import D from '$lib/js/D'

  export let data
  let { name, module } = data

  if (browser) {
    D.lazy = new LazyLoad()
    D.update = _ => {
      D.lazy.update()
    }
  }
</script>

<svelte:head>
  <title>{name} | Ben Pang</title>
</svelte:head>

<ExtLayout>
  <div slot="bar" flex ml-4 h-full>
    <span m-auto>
      <A un-text="inherit" decoration="none" href="/" t>ben</A>
      /
      <A un-text="inherit" decoration="none" href="/items" t>items</A>
      /
      <A un-text="inherit" decoration="none" href="/items/{name}" t>{name}</A>
    </span>
  </div>

  <svelte:component this={module} {D} />
</ExtLayout>
