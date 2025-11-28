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

  let loaded = $state(false)
</script>

{#snippet video(script: boolean, rest: HTMLVideoAttributes = {})}
  <video
    class={[
      'transition-opacity',
      script && ['noscript:hidden', !loaded && 'opacity-0'],
      px && 'image-render-pixel',
    ]}
    loop
    muted
    oncanplaythrough={() => loaded = true}
    playsinline
    {...rest}
    {@attach vload}
  >
    <source src='https://i.imgur.com/{a}.mp4' type='video/mp4' />
  </video>
{/snippet}

<Video {aspectClass}>
  <!-- eslint-disable-next-line @typescript-eslint/no-confusing-void-expression -->
  {@render video(true, { preload: 'none' })}
  <noscript>
    <!-- eslint-disable-next-line @typescript-eslint/no-confusing-void-expression -->
    {@render video(false, { controls: true })}
  </noscript>
</Video>
