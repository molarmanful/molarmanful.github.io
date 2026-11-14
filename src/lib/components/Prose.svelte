<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  const { children, ...rest }: HTMLAttributes<HTMLDivElement> & {
    children?: Snippet
  } = $props()
</script>

<div
  class='
    flex w-[80ch] max-w-full flex-col gap-5 px-5 hyphens-auto
    xl:gap-8 xl:px-8
    **:[img]:w-full
  '
  {...rest}
>
  {@render children?.()}
</div>
