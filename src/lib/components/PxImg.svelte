<script lang='ts'>
  import type { HTMLImgAttributes } from 'svelte/elements'

  import { clsx } from '$lib/ts/util.svelte'

  type Props = HTMLImgAttributes

  const { src, ...rest }: Props = $props()

  let el: HTMLImageElement | undefined = $state()
  let devicePixelRatio = $state(1)
  let loaded = $state(false)
  let w = $state(1)
  let pw = $state(1)
  const px = $derived(pw >= w)

  let stop = false
  const rsz = () => {
    if (stop)
      return
    setTimeout(() => {
      if (!el)
        return
      w = el.naturalWidth
      pw = el.parentElement?.clientWidth || 0
      stop = false
    }, 100)
    stop = true
    loaded = true
  }
</script>

<svelte:window onresize={rsz} bind:devicePixelRatio />

{#snippet img(script: boolean)}
  <img
    bind:this={el}
    style:image-rendering={px ? 'pixelated' : ''}
    class={clsx(
      'block transition-opacity',
      script && ['script', loaded ? 'opacity-100' : 'opacity-0'],
    )}
    decoding='async'
    loading='lazy'
    onload={rsz}
    {src}
    {...rest}
  />
{/snippet}

<!-- eslint-disable-next-line @typescript-eslint/no-confusing-void-expression -->
{@render img(true)}
<noscript>
  <!-- eslint-disable-next-line @typescript-eslint/no-confusing-void-expression -->
  {@render img(false)}
</noscript>
