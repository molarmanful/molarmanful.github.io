<script>
  import { ItemBar } from '$lib/mixins'
</script>

<ItemBar z="10">
  <slot name="bar" />
</ItemBar>
<div screen flex="~ col" overflow-hidden>
  <div mt-16 />
  <div w-full scroll overflow="y-auto x-hidden" text="xl gray-400">
    <slot />
  </div>
</div>
