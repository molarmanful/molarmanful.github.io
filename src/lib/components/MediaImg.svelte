<script lang='ts'>
  import type { HTMLImgAttributes } from 'svelte/elements'

  import Image from './Image.svelte'

  const { name, px = false, ...rest }: Omit<HTMLImgAttributes, 'class'> & {
    name: string
    px?: boolean
    sizes?: string
  } = $props()
</script>

<Image
  {name}
  class={[px && 'image-render-pixel']}
  type='media'
  {...rest}
/>
