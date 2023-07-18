<script>
  import { ItemBar, A } from '$lib/mixins'
  import { page } from '$app/stores'
  import { afterNavigate } from '$app/navigation'

  let el

  $: crumbs = $page.url.pathname.split`/`
    .slice(1)
    .reduce((a, x) => [...a, [x, a[a.length - 1][1] + '/' + x]], [['', '']])
    .slice(1)

  afterNavigate(_ => {
    requestAnimationFrame(_ => {
      el.scrollTo(0, 0)
    })
  })
</script>

<ItemBar z="10">
  <div flex ml-4 h-full>
    <span m-auto text-nowrap>
      <A t un-text="inherit" decoration="none" href="/">ben</A>
      {#each crumbs as [name, href]}
        &gt;
        <A t un-text="inherit" decoration="none" {href}>
          {name}
        </A>
      {/each}
    </span>
  </div>
</ItemBar>
<div screen flex="~ col" overflow-hidden>
  <div
    w-full
    splash
    scroll
    overflow="y-auto x-hidden"
    mt-16
    p="b-4 lg:0"
    bind:this={el}
  >
    <slot />
  </div>
</div>
