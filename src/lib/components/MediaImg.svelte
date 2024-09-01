<script lang='ts'>
  import type Img from '@zerodevx/svelte-img'
  import type { ComponentProps } from 'svelte'

  import { cD } from '$lib/js/contexts'

  import { Image } from '.'

  interface Props extends ComponentProps<Img> {
    name: string
    px?: boolean
  }

  const { name, px = false, ...props }: Props = $props()
  const { D } = cD.get()
</script>

<Image {name} b={D.media} clazz={px ? 'image-render-pixel' : ''} {...props} />
