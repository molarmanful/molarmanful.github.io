<script>
  import { page } from '$app/stores'
  import { ItemBar, A } from '$lib/mixins'

  let crumbs = $page.url.pathname.split`/`
    .slice(1)
    .reduce((a, x) => [...a, [x, a[a.length - 1][1] + '/' + x]], [['', '']])
    .slice(1)
</script>

<ItemBar z="10">
  <div flex ml-4 h-full>
    <span m-auto>
      <A t un-text="inherit" decoration="none" href="/">ben</A>
      {#each crumbs as [name, href]}
        /
        <A t un-text="inherit" decoration="none" {href}>
          {name}
        </A>
      {/each}
    </span>
  </div>
</ItemBar>
<div screen flex="~ col" overflow-hidden>
  <div mt-16 />
  <div w-full splash scroll overflow="y-auto x-hidden" text="xl gray-400">
    <slot />
  </div>
</div>
