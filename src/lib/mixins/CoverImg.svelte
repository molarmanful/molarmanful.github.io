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
  draggable="false"
  mt="0"
  {...$$restProps}
/>
