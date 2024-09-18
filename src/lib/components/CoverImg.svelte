<script lang='ts'>
  import type { HTMLImgAttributes } from 'svelte/elements'

  import { Image } from '.'

  interface Props extends HTMLImgAttributes {
    name: string
    i?: boolean
    sizes?: string
  }

  const { name, i = false, ...rest }: Props = $props()
</script>

<Image
  {name}
  b={['covers']}
  clazz='transition-filter'
  draggable='false'
  loading='eager'
  mt
  sizes='
    (min-width: 1536px) calc((1536px - 2rem * 3) / 4),
    (min-width: 1280px) calc((1280px - 1.25rem * 3) / 4),
    (min-width: 1024px) calc((1024px - 1.25rem * 2) / 3),
    (min-width: 768px) calc((768px - 1.25rem * 2) / 3),
    (min-width: 640px) calc((640px - 1.25rem) / 2),
    calc(100vw)
  '
  {...rest}
/>
<div class="{i ? 'bg-head' : 'bg-accent'} absolute colize full inset-0 mix-blend-color transition-400"></div>
