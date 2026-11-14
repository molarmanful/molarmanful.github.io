<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { ClassValue, HTMLAttributes } from 'svelte/elements'

  const { class: clazz, children }: HTMLAttributes<HTMLDivElement> & {
    class?: ClassValue
    children?: Snippet
  } = $props()
</script>

<div
  class={[
    `
      max-h-screen bg-bord-950
      **:[video,iframe]:h-full **:[video,iframe]:w-270
      **:[video,iframe]:max-w-full **:[video,iframe]:object-contain
      [.aspect-video]:**:[video,iframe]:w-480
    `,
    clazz,
  ]}
>
  {@render children?.()}
</div>
