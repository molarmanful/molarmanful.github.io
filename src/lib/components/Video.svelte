<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    aspect?: string
    children: Snippet
    aspectClass?: unknown
  }

  const { aspectClass = 'aspect-video', children }: Props = $props()
</script>

<div
  class={[
    `
      max-h-screen bg-bord-950
      [&_:is(video,iframe)]:h-full [&_:is(video,iframe)]:w-[1080px]
      [&_:is(video,iframe)]:max-w-full [&_:is(video,iframe)]:object-contain
      [&.aspect-video_:is(video,iframe)]:w-[1920px]
    `,
    aspectClass,
  ]}
>
  {@render children()}
</div>
