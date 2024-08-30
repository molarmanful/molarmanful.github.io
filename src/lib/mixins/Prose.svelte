<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children: Snippet
  }

  const { children, ...props }: Props = $props()
</script>

<div
  class='mx-auto max-w-prose w-full pb-6 pt-8 prose lg:pb-12 md:pt-16'
  {...props}
>
  {@render children()}
</div>
