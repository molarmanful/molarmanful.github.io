<script lang='ts'>
  import type { ComponentProps } from 'svelte'

  import { Image } from '.'

  interface Props extends ComponentProps<Image> {
    name: string
    px?: boolean
  }

  const { name, px = false, ...rest }: Props = $props()
</script>

<Image
  {name}
  clazz={px ? 'image-render-pixel' : ''}
  {...rest}
  b={['media']}
/>
