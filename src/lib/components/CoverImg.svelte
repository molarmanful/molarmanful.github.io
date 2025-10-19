<script lang='ts'>
  import type { HTMLImgAttributes } from 'svelte/elements'

  import Image from './Image.svelte'

  interface Props extends Omit<HTMLImgAttributes, 'class'> {
    name: string
    sizes?: string
  }

  const { name, ...rest }: Props = $props()
</script>

<Image
  type='covers'
  {name}
  draggable={false}
  loading='eager'
  sizes='
    (min-width: 1536px) calc((1536px - 2rem * 3) / 4),
    (min-width: 1280px) calc((1280px - 1.25rem * 3) / 4),
    (min-width: 1024px) calc((1024px - 1.25rem * 2) / 3),
    (min-width: 768px) calc((768px - 1.25rem * 2) / 3), 
    (min-width: 640px) calc((640px - 1.25rem) / 2), calc(100vw)
  '
  {...rest}
/>
