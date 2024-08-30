<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  interface Props extends HTMLAttributes<HTMLHeadingElement> {
    bold?: boolean
    clazz?: string
    children: Snippet
  }

  const { bold = false, clazz = '', children, ...props }: Props = $props()
</script>

<h2
  class="{bold ? 'bold text-head' : 'font-200 text-text-300'} case-normal font-2 mt-6 lg:mt-12 type-5 {clazz}"
  {...props}
>
  {@render children()}
</h2>
