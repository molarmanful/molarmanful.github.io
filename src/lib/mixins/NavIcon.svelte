<script>
  import { getContext } from 'svelte'

  const { pulse, filter, color, ...props } = $props()

  const loaded = getContext('loaded')
</script>

<button
  style:transition="color {pulse}ms, border-color {pulse / 5}ms, transform {pulse /
    5}ms"
  style:filter
  style:color
  class={loaded.x ? 'translate-x-0' : 'translate-x-17'}
  aria-label="nav menu"
  b="1 current focus:white"
  bg="black"
  ease="linear"
  h="16"
  outline="none"
  var_x="focus:white"
  w="16"
  {...props}
>
  <svg alt="menu" h="1/2" m-auto viewBox="0 0 5 5" w="1/2">
    {#each Array(3).keys() as i}
      <rect
        style:transition="color {pulse / 4}ms {(pulse / 4) * (i + 1)}ms, fill {pulse /
          5}ms"
        style:color
        ease-linear
        height="1"
        un-fill="[var(--x,currentColor)]"
        width="5"
        y={i * 2}
      ></rect>
    {/each}
  </svg>
</button>
