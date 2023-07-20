<script>
  import { Image } from '.'

  export let D
  export let name
</script>

<Image
  border="1 transparent hover:white"
  mt="0"
  transition=""
  graiscale
  draggable="false"
  {name}
  a={D.covers_tiny}
  b={D.covers}
  {...$$restProps}
/>
