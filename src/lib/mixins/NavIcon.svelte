<script>
  export let pulse, filter, clrs, len
</script>

<button
  style:transition-duration="{pulse}ms, 400ms, 400ms"
  style:filter
  class={clrs[len - 1]}
  aria-label="open navigation menu"
  bg-black
  border="1 current focus:white"
  h-16
  outline-0
  transition="color,border-color,filter"
  var_x="focus:white"
  w-16
  on:mouseenter
  on:click
  on:keyup
  {...$$restProps}
>
  <svg alt="menu" h="1/2" m-auto viewBox="0 0 100 100" w="1/2">
    {#each Array(3).keys() as i}
      <rect
        style:transition-duration="{pulse}ms, 400ms"
        class={clrs[i]}
        height="20"
        transition="color,fill"
        un-fill="[var(--x,currentColor)]"
        width="100"
        y={i * 40}
      ></rect>
    {/each}
  </svg>
</button>
