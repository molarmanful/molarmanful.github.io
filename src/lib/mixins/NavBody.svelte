<script>
  import { scale } from 'svelte/transition'

  import { FocusTrap } from '../js/util.svelte'

  let { pulse, filter, clrs, len, children, ...props } = $props()

  const { useFocusTrap } = new FocusTrap({
    immediate: true,
    initialFocus: false,
  }).fns
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
  use:useFocusTrap
  transition:scale={{ duration: 200 }}
  {...props}
>
  <menu font-1 leading-8 text-3xl>
    {@render children()}
  </menu>
</div>
