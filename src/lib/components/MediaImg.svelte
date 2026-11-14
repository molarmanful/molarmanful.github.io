<script lang='ts'>
  import type { HTMLImgAttributes } from 'svelte/elements'

  import { media } from '#lib/ts/media.ts'

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
  imgs={media}
  type='media'
  {...rest}
/>
