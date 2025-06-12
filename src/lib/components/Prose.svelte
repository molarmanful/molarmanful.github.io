<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children: Snippet
  }

  const { children, ...rest }: Props = $props()
</script>

<div
  class='px-5 flex flex-col gap-5 max-w-full w-[80ch] hyphens-auto xl:(px-8 gap-8) [&_img]:w-full'
  {...rest}
>
  {@render children()}
</div>
