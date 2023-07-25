<script>
  import { getContext } from 'svelte'

  import { Image } from '.'

  let D = getContext('D')

  export let name
</script>

<Image
  {name}
  a={D.covers_tiny}
  b={D.covers}
  border="1 transparent hover:white"
  draggable="false"
  graiscale="hover: active:"
  mt="0"
  outline="0"
  transition=""
  {...$$restProps}
/>
