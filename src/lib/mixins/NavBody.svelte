<script>
  import { scale } from 'svelte/transition'

  import { FocusTrap } from '../js/util.svelte'

  let {
    tops = [],
    GOTO = () => {},
    pulse,
    filter,
    clrs,
    len,
    ...props
  } = $props()

  const { useFocusTrap } = new FocusTrap({
    immediate: true,
    initialFocus: false,
  }).fns
</script>

<div
  style:transition-duration="{pulse}ms"
  style:filter
  class={clrs[len - 1]}
  b="1 current"
  bg="black"
  origin="top-right"
  p="4"
  role="navigation"
  transition="color"
  use:useFocusTrap
  transition:scale={{ duration: 200 }}
  {...props}
>
  <menu font-1 leading-8 text-3xl>
    {#each tops as top, i}
      <li>
        <button
          style:transition="color {pulse}ms, border-color 500ms, filter 500ms"
          class={clrs[i]}
          b="b-1 transparent focus:white"
          bg-transparent
          ease
          filter="[&:hover,&:focus]:(brightness-0 invert)"
          onclick={GOTO(top)}
          outline-none
        >
          {top.toUpperCase()}
        </button>
      </li>
    {/each}
  </menu>
</div>
