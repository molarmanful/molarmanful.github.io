<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  interface Props extends HTMLAttributes<HTMLParagraphElement> {
    clazz?: string
    children: Snippet
  }

  const { clazz = '', children, ...rest }: Props = $props()
</script>

<p class='{0} mt-4 lg:mt-8 {clazz}' {...rest}>
  {@render children()}
</p>
