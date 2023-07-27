<script>
  import { createFocusTrap } from '@grail-ui/svelte'
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

  let el
  let { useFocusTrap } = createFocusTrap({
    immediate: true,
    initialFocus: () => el,
  })
</script>

<div contents use:useFocusTrap>
  <ItemBar>
    <div flex h-full ml-4>
      <span m-auto text-nowrap>
        <A href="/" item t tabindex="0">ben</A>
        {#each crumbs as [name, href], i}
          <span transition:fade={{ duration: 200 }}>
            &gt;
            {#if i == crumbs.length - 1}
              {name}
            {:else}
              <A {href} item t tabindex="0">
                {name}
              </A>
            {/if}
          </span>
        {/each}
      </span>
    </div>
  </ItemBar>

  {#key data.pathname}
    <div in:receive={{ key: 'a' }} out:send={{ key: 'a' }}>
      <ItemBody bind:el>
        <slot />
      </ItemBody>
    </div>
  {/key}
</div>
