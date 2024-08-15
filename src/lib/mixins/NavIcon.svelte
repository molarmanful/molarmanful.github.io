<script>
  import { getContext } from 'svelte'

  let { pulse, filter, clrs, len, ...props } = $props()

  const loaded = getContext('loaded')
</script>

<button
  style:transition="color {pulse}ms, border-color 400ms, filter 400ms, transform
  400ms"
  style:filter
  class="{clrs[len - 1]} {loaded.x ? 'translate-x-0' : 'translate-x-17'}"
  aria-label="nav menu"
  b="1 current focus:white"
  bg="black"
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
