<script>
  import { setContext } from 'svelte'
  import { fade } from 'svelte/transition'
  import LazyLoad from 'vanilla-lazyload'

  import { browser } from '$app/environment'
  import { send, receive } from '$lib/js/crossfade'
  import D from '$lib/js/D'
  import { ItemBar, ItemBody, A } from '$lib/mixins'

  export let data

  $: crumbs = data.pathname.split`/`
    .slice(1)
    .reduce((a, x) => [...a, [x, a[a.length - 1][1] + '/' + x]], [['', '']])
    .slice(1)

  if (browser) {
    D.lazy = new LazyLoad()
  }

  setContext('D', D)
</script>

<ItemBar>
  <div flex h-full ml-4>
    <span m-auto text-nowrap>
      <A decoration="none" href="/" item t>ben</A>
      {#each crumbs as [name, href]}
        <span transition:fade={{ duration: 200 }}>
          &gt;
          <A decoration="none" {href} item t>
            {name}
          </A>
        </span>
      {/each}
    </span>
  </div>
</ItemBar>

{#key data.pathname}
  <div in:receive={{ key: 'a' }} out:send={{ key: 'a' }}>
    <ItemBody>
      <slot />
    </ItemBody>
  </div>
{/key}
