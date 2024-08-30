<script lang='ts'>
  import type Img from '@zerodevx/svelte-img'
  import type { ComponentProps } from 'svelte'

  import { cD } from '../js/contexts'

  import { Image } from '.'

  interface Props extends ComponentProps<Img> {
    name: string
  }

  const { name, ...props }: Props = $props()
  const { D } = cD.get()
</script>

<Image {name} b={D.media} {...props} />
