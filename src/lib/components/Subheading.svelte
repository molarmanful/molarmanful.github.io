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
  class="mt-6 font-2 case-normal lg:mt-12 type-5 {bold ? 'text-head bold' : 'text-text-300 font-200'} {clazz}"
  use:aos={aoso}
  {...rest}
>
  {@render children()}
</h2>
