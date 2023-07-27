<script>
  export let el
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
  <!-- svelte-ignore a11y-autofocus -->
  <article
    bind:this={el}
    autofocus
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
