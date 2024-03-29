<script>
  import { getContext } from 'svelte'

  import { lazy } from '../js/util'

  const D = getContext('D')

  export let name, a, b
  export let x = false
  export let mt = void 0
</script>

<img
  alt={name}
  data-src={x ? b : b.get(name)}
  m="x-auto {mt ? 't-0' : 't-6 md:t-8'}"
  max-h-full
  object-contain
  src={x ? a : a.get(name)}
  w-full
  use:lazy={{ D }}
  {...$$restProps}
/>
