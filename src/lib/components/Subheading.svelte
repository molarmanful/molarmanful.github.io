<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import { cD } from '$lib/js/contexts'

  type Props = HTMLAttributes<HTMLHeadingElement> & Aos.Props & {
    bold?: boolean
    clazz?: string
    children: Snippet
  }

  const { bold = false, clazz = '', aoso = { on: false }, children, ...rest }: Props = $props()
  const { aos } = cD.get()
</script>

<h2
  class="{bold ? 'bold text-head' : 'font-200 text-text-300'} case-normal font-2 mt-6 lg:mt-12 type-5 {clazz}"
  use:aos={aoso}
  {...rest}
>
  {@render children()}
</h2>
