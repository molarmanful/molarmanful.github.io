<script>
  let { el = $bindable(), children, ...props } = $props()
</script>

<div
  absolute=""
  bg="black"
  inset="0"
  overflow="hidden"
  p="2 t-18"
  screen=""
  {...props}
>
  <!-- svelte-ignore a11y_autofocus -->
  <article
    bind:this={el.x}
    autofocus
    border="1 t-0 gray-500"
    full
    outline-none
    overflow-x-hidden
    pb="4 lg:0"
    scroll
    tabindex="-1"
  >
    {@render children()}
  </article>
</div>
