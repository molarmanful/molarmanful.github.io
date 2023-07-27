<script>
  import { onMount } from 'svelte'

  export let el

  onMount(() => {
    el.focus()
  })
</script>

<div
  absolute
  bg-black
  inset-0
  overflow-hidden
  p="2 t-18"
  screen
  {...$$restProps}
>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <article
    bind:this={el}
    border="1 t-0 gray-500"
    full
    outline-none
    overflow-x-hidden
    pb="4 lg:0"
    scroll
    tabindex="-1"
  >
    <slot />
  </article>
</div>
