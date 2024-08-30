<script lang='ts'>
  import Img from '@zerodevx/svelte-img'
  import type { ComponentProps } from 'svelte'

  import { cD } from '../js/contexts'

  import { Image } from '.'

  interface Props extends ComponentProps<Img> {
    name: string
    i?: boolean
  }

  const { name, i = false, ...props }: Props = $props()
  const { D } = cD.get()
</script>

<Image
  {name}
  b={D.covers}
  clazz='transition-filter'
  draggable='false'
  mt
  {...props}
/>
<div class="{i ? 'bg-head' : 'bg-accent'} absolute colize full inset-0 mix-blend-color transition-400"></div>
