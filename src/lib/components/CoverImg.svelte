<script lang='ts'>
  import type { ComponentProps } from 'svelte'

  import { Image } from '.'

  interface Props extends ComponentProps<Image> {
    name: string
    i?: boolean
  }

  const { name, i = false, ...rest }: Props = $props()
</script>

<Image
  {name}
  clazz='transition-filter'
  draggable='false'
  loading='eager'
  mt
  sizes='(min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw'
  {...rest}
  b={['covers']}
/>
<div class="{i ? 'bg-head' : 'bg-accent'} absolute colize full inset-0 mix-blend-color transition-400"></div>
