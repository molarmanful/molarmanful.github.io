<script>
  import { ItemBar, ItemBody, A } from '$lib/mixins'
  import { send, receive } from '$lib/js/crossfade'

  export let data

  $: crumbs = data.pathname.split`/`
    .slice(1)
    .reduce((a, x) => [...a, [x, a[a.length - 1][1] + '/' + x]], [['', '']])
    .slice(1)
</script>

<ItemBar>
  <div flex ml-4 h-full>
    <span m-auto text-nowrap>
      <A t item decoration="none" href="/">ben</A>
      {#each crumbs as [name, href]}
        &gt;
        <A t item decoration="none" {href}>
          {name}
        </A>
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
