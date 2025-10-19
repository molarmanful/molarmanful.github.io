<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children: Snippet
  }

  const { children, ...rest }: Props = $props()
</script>

<div
  class='
    flex w-[80ch] max-w-full flex-col gap-5 px-5 hyphens-auto
    xl:gap-8 xl:px-8
    [&_img]:w-full
  '
  {...rest}
>
  {@render children()}
</div>
