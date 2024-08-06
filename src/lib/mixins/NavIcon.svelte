<script>
  let { pulse, filter, clrs, len, ...props } = $props()
</script>

<button
  style:transition="color {pulse}ms, border-color 400ms, filter 400ms"
  style:filter
  class={clrs[len - 1]}
  aria-label="nav menu"
  bg="black"
  border="1 current focus:white"
  ease=""
  h="16"
  outline="none"
  var_x="focus:white"
  w="16"
  {...props}
>
  <svg alt="menu" h="1/2" m-auto viewBox="0 0 100 100" w="1/2">
    {#each Array(3).keys() as i}
      <rect
        style:transition="color {pulse}ms, fill 400ms"
        class={clrs[i]}
        ease
        height="20"
        un-fill="[var(--x,currentColor)]"
        width="100"
        y={i * 40}
      ></rect>
    {/each}
  </svg>
</button>
