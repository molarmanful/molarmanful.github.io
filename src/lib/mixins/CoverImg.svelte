<script>
  import { getContext } from 'svelte'

  import { Image } from '.'

  const D = getContext('D')

  export let name
</script>

<Image {name} b={D.covers} draggable="false" mt="0" {...$$restProps} />
