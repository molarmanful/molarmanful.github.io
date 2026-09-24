<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    aspect?: string
    children?: Snippet
    aspectClass?: unknown
  }

  const { aspectClass = 'aspect-video', children }: Props = $props()
</script>

<div
  class={[
    `
      max-h-screen bg-bord-950
      **:[video,iframe]:h-full **:[video,iframe]:w-270
      **:[video,iframe]:max-w-full **:[video,iframe]:object-contain
      [.aspect-video]:**:[video,iframe]:w-480
    `,
    aspectClass,
  ]}
>
  {@render children?.()}
</div>
