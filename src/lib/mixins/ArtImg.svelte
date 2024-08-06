<script>
  import { getContext } from 'svelte'

  import { Image } from '.'

  let { name, ...props } = $props()

  const D = getContext('D')
</script>

<Image {name} b={D.art} {...props} />
