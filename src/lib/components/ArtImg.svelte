<script lang='ts'>
  import type Img from '@zerodevx/svelte-img'
  import type { ComponentProps } from 'svelte'

  import { Image } from '.'

  import { cD } from '$lib/js/contexts'

  interface Props extends ComponentProps<Img> {
    name: string
  }

  const { name, ...props }: Props = $props()
  const { D } = cD.get()
</script>

<Image {name} b={D.art} {...props} />
