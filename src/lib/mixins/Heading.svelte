<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  interface Props extends HTMLAttributes<HTMLHeadingElement> {
    clazz?: string
    children: Snippet
  }

  const { clazz = '', children, ...props }: Props = $props()
</script>

<h1 class='{0} text-(head stroked) uppercase hyphens-manual type-7 {clazz}' {...props}>
  {@render children()}
</h1>
