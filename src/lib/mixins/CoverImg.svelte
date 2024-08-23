<script>
  import { getContext } from 'svelte'

  import { Image } from '.'

  const { name, i, ...props } = $props()
  const { D } = getContext('D')
</script>

<Image
  {name}
  b={D.covers}
  draggable="false"
  mt="0"
  transition="filter"
  {...props}
/>
<div
  class={i ? 'bg-head' : 'bg-accent'}
  absolute
  colize
  full
  inset-0
  mix-blend-color
  transition-400
></div>
