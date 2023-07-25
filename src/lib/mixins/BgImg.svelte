<script>
  import { getContext } from 'svelte'

  let D = getContext('D')
  export let a
  export let name
</script>

<img
  class="lazy"
  alt={name}
  blur
  data-src={D[a].get(name)}
  draggable="false"
  fixed
  full
  object="center cover"
  opacity-50
  src={D[a + '_tiny'].get(name)}
/>
