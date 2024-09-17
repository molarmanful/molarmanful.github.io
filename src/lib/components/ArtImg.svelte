<script lang='ts'>
  import type { ComponentProps } from 'svelte'

  import { Image } from '.'

  interface Props extends ComponentProps<Image> {
    name: string
  }

  const { name, ...rest }: Props = $props()
</script>

<Image
  {name}
  {...rest}
  b={['art']}
/>
