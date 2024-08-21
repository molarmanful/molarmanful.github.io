<script>
  import { getContext } from 'svelte'

  import { Image } from '.'

  let { name, ...props } = $props()
  const D = getContext('D')
</script>

<Image
  {name}
  b={D.covers}
  brightness="69"
  draggable="false"
  mt="0"
  saturate="20"
  transition="filter"
  {...props}
/>
<div
  absolute
  bg-accent
  colize
  full
  inset-0
  mix-blend-color
  opacity-50
  transition-opacity
></div>
