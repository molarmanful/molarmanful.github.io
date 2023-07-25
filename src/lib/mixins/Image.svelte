<script>
  import { getContext } from 'svelte'

  import { lazy } from '../js/util'

  let D = getContext('D')

  export let name
  export let x = false
  export let a
  export let b
  export let mt = void 0
</script>

<img
  alt={name}
  data-src={x ? b : b.get(name)}
  m="x-auto {mt ? 't-0' : 't-4 md:t-8'}"
  max-h-full
  object-contain
  src={x ? a : a.get(name)}
  w-full
  use:lazy={{ D }}
  {...$$restProps}
/>
