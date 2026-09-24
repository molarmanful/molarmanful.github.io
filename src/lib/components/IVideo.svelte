<script lang='ts'>
  import type { HTMLVideoAttributes } from 'svelte/elements'

  import { vload } from '$lib/ts/vload'

  import Video from './Video.svelte'

  interface Props {
    a: string
    px?: boolean
    aspectClass?: string
  }

  const { a, px, aspectClass = 'aspect-square' }: Props = $props()

  let isLoaded = $state(false)
</script>

{#snippet video(isScript: boolean, rest: HTMLVideoAttributes = {})}
  <video
    class={[
      'transition-opacity',
      isScript && ['noscript:hidden', !isLoaded && 'opacity-0'],
      px && 'image-render-pixel',
    ]}
    loop
    muted
    oncanplaythrough={() => isLoaded = true}
    playsinline
    {...rest}
    {@attach vload}
  >
    <source src='https://i.imgur.com/{a}.mp4' type='video/mp4' />
  </video>
{/snippet}

<Video {aspectClass}>
  {@render video(true, { preload: 'none' })}
  <noscript>
    {@render video(false, { controls: true })}
  </noscript>
</Video>
