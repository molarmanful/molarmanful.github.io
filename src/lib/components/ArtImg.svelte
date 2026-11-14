<script lang='ts'>
  import type { HTMLImgAttributes } from 'svelte/elements'

  import { art } from '#lib/ts/art.ts'

  import Image from './Image.svelte'

  const { name, ...rest }: Omit<HTMLImgAttributes, 'class'> & {
    name: string
    sizes?: string
  } = $props()
</script>

<Image {name} imgs={art} type='art' {...rest} />
