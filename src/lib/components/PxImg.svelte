<script lang='ts'>
  import type { HTMLImgAttributes } from 'svelte/elements'

  import { useEventListener } from 'runed'

  interface Props extends HTMLImgAttributes {}

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

  useEventListener(() => window, 'resize', rsz)
</script>

<svelte:window bind:devicePixelRatio />

<div class='w-full'>
  <img
    bind:this={el}
    style:width='{w * ~~devicePixelRatio / devicePixelRatio * ~~Math.max(1, pw / w)}px'
    style:image-rendering={px ? 'pixelated' : ''}
    class="mx-auto mt-6 block max-w-full ofade-200 md:mt-8 {loaded ? 'opacity-100' : 'opacity-0'}"
    decoding='async'
    loading='lazy'
    onload={rsz}
    {src}
    {...rest}
  />
</div>
