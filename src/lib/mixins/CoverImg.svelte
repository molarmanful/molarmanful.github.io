<script>
  import { getContext } from 'svelte'

  import { Image } from '.'

  let D = getContext('D')

  export let name
</script>

<Image
  border="1 transparent hover:white"
  mt="0"
  transition=""
  graiscale="hover:"
  draggable="false"
  {name}
  a={D.covers_tiny}
  b={D.covers}
  {...$$restProps}
/>
