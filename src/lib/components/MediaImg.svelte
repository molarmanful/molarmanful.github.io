<script lang='ts'>
  import type { HTMLImgAttributes } from 'svelte/elements'

  import { Image } from '.'

  interface Props extends HTMLImgAttributes {
    name: string
    px?: boolean
    sizes?: string
  }

  const { name, px = false, ...rest }: Props = $props()
</script>

<Image
  {name}
  b={['media']}
  clazz={px ? 'image-render-pixel' : ''}
  {...rest}
/>
