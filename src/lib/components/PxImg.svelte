<script lang='ts'>
  import { useEventListener } from 'runed'
  import type { HTMLImgAttributes } from 'svelte/elements'

  interface Props extends HTMLImgAttributes {}

  const { src, ...rest }: Props = $props()

  let el: HTMLImageElement | undefined = $state()
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

<div class='w-full'>
  <img
    bind:this={el}
    style:width='{w * ~~Math.max(1, pw / w)}px'
    style:image-rendering={px ? 'pixelated' : ''}
    class="{loaded ? 'opacity-100' : 'opacity-0'} block mx-auto mt-6 md:mt-8' max-w-full ofade-200"
    decoding='async'
    loading='lazy'
    onload={rsz}
    {src}
    {...rest}
  />
</div>
