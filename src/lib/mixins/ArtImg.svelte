<script>
  import { getContext } from 'svelte'

  import { Image } from '.'

  let D = getContext('D')
  export let name
</script>

<Image {name} a={D.art_tiny} b={D.art} {...$$restProps} />
