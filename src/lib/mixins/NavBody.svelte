<script>
  import { scale } from 'svelte/transition'

  import { FocusTrap } from '../js/util.svelte'

  const {
    tops = [],
    GOTO = () => {},
    pulse,
    filter,
    color,
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
  style:color
  b="1 current"
  bg="black"
  origin="top-right"
  p="4"
  role="navigation"
  text="bord"
  transition="color"
  use:useFocusTrap
  transition:scale={{ duration: 200 }}
  {...props}
>
  <menu font-1 leading-8 text-3xl>
    {#each tops as top}
      <li>
        <button
          style:transition="color {pulse}ms, border-color 400ms, filter 400ms"
          style:color
          b="b-1 transparent [&:hover,&:focus]:white"
          bg-transparent
          ease
          fake="[&:hover,&:focus]:white"
          onclick={GOTO(top)}
          outline-none
          text-bord
        >
          {top.toUpperCase()}
        </button>
      </li>
    {/each}
  </menu>
</div>
