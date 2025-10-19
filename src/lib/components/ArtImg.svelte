<script lang='ts'>
  import type { HTMLImgAttributes } from 'svelte/elements'

  import Image from './Image.svelte'

  interface Props extends Omit<HTMLImgAttributes, 'class'> {
    name: string
    sizes?: string
  }

  const { name, ...rest }: Props = $props()
</script>

<Image type='art' {name} {...rest} />
