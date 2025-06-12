<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    aspect?: string
    children: Snippet
    aspectClass?: string
  }

  const { aspectClass = 'aspect-video', children }: Props = $props()
</script>

<div class='bg-bord-950 max-h-screen [&_:is(video,iframe)]:(h-full max-w-full w-1080px object-contain) [&.aspect-video_:is(video,iframe)]:w-1920px {aspectClass}'>
  {@render children()}
</div>
