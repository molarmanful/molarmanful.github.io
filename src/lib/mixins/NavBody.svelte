<script>
  import { scale } from 'svelte/transition'

  let { pulse, filter, clrs, len, children, ...props } = $props()
</script>

<div
  style:transition-duration="{pulse}ms"
  style:filter
  class={clrs[len - 1]}
  bg="black"
  border="1 current"
  origin="top-right"
  p="4"
  role="navigation"
  transition="color"
  transition:scale={{ duration: 200 }}
  {...props}
>
  <menu font-1 leading-8 text-3xl>
    {@render children()}
  </menu>
</div>
