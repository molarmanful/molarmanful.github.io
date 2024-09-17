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
  sizes='(min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw'
  {...rest}
/>
<div class="{i ? 'bg-head' : 'bg-accent'} absolute colize full inset-0 mix-blend-color transition-400"></div>
