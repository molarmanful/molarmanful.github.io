<script lang='ts'>
  import type { HTMLImgAttributes } from 'svelte/elements'

  import { Image } from '.'

  interface Props extends HTMLImgAttributes {
    name: string
    sizes?: string
  }

  const { name, ...rest }: Props = $props()
</script>

<Image
  {name}
  b={['art']}
  {...rest}
/>
