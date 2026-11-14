<script lang='ts'>
  import type { HTMLImgAttributes } from 'svelte/elements'

  import Image from './Image.svelte'

  const { name, ...rest }: Omit<HTMLImgAttributes, 'class'> & {
    name: string
    sizes?: string
  } = $props()
</script>

<Image {name} type='art' {...rest} />
