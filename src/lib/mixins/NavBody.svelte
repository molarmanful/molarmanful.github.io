<script>
  import { scale } from 'svelte/transition'

  export let pulse, filter, clrs, len
</script>

<div
  style:transition-duration="{pulse}ms"
  style:filter
  class={clrs[len - 1]}
  bg-black
  border="1 current"
  origin-top-right
  p-4
  role="navigation"
  transition-color
  on:mouseleave
  transition:scale={{ duration: 200 }}
  {...$$restProps}
>
  <menu font-1 leading-8 text-3xl>
    <slot />
  </menu>
</div>
