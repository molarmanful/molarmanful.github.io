<script lang='ts'>
  import Img from '@zerodevx/svelte-img'
  import type { ComponentProps } from 'svelte'

  interface Props extends ComponentProps<Img> {
    name?: string
    b: string | Map<string, string>
    mt?: boolean
    clazz?: string
  }

  const { name, b, mt = false, clazz = '', ...props }: Props = $props()

  let loaded = $state(false)
</script>

<Img
  class="{loaded ? 'loaded' : ''} {mt ? 'mt-0' : 'mt-6 md:mt-8'} laz bg-contain! mx-auto max-h-full object-contain text-0 w-full {clazz}"
  alt={name}
  onload={() => {
    loaded = true
  }}
  src={b instanceof Map ? b.get(name ?? '') : b}
  {...props}
/>
