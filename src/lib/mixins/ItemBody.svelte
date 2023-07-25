<script>
  let el
</script>

<svelte:window
  on:keydown={() => {
    el.focus()
  }}
/>

<div
  absolute
  bg-black
  inset-0
  overflow-hidden
  p="2 t-18"
  screen
  {...$$restProps}
>
  <div
    bind:this={el}
    border="1 t-0 gray-500"
    full
    outline-0
    overflow-x-hidden
    pb="4 lg:0"
    scroll
    tabindex="-1"
  >
    <slot />
  </div>
</div>
