<svelte:options namespace="svg" />

<script>
  import { rcolor } from '../js/util'

  export let name
  let c = 'text-gray-900'
  let t = 0
</script>

<svelte:element
  this={name}
  style:transition-duration="{t}ms"
  class="fill-transparent transition-color stroke-1 stroke-current {c}"
  use:rcolor={{
    c,
    f: (x, y) => {
      c = x
      t = y
    },
  }}
  {...$$restProps}
/>
