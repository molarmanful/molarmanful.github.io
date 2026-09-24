<script lang='ts'>
  import type { HTMLImgAttributes } from 'svelte/elements'

  type Props = HTMLImgAttributes

  const { src, ...rest }: Props = $props()

  let el: HTMLImageElement | undefined = $state()
  let devicePixelRatio = $state(1)
  let isLoaded = $state(false)
  let w = $state(1)
  let pw = $state(1)
  const isPx = $derived(pw >= w)

  let isStop = false
  const rsz = () => {
    if (isStop)
      return
    setTimeout(() => {
      if (!el)
        return
      w = el.naturalWidth
      pw = el.parentElement?.clientWidth || 0
      isStop = false
    }, 100)
    isStop = true
    isLoaded = true
  }
</script>

<svelte:window onresize={rsz} bind:devicePixelRatio />

{#snippet img(isScript: boolean)}
  <img
    bind:this={el}
    class={[
      'block transition-opacity',
      isScript && ['noscript:hidden', !isLoaded && 'opacity-0'],
      isPx && 'image-render-pixel',
    ]}
    decoding='async'
    loading='lazy'
    onload={rsz}
    {src}
    {...rest}
  />
{/snippet}

{@render img(true)}
<noscript>
  {@render img(false)}
</noscript>
