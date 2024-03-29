<script>
  import { getContext } from 'svelte'

  import { Image } from '.'

  const D = getContext('D')
  export let name
</script>

<Image {name} a={D.media_tiny} b={D.media} {...$$restProps} />
