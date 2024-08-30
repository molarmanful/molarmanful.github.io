<script lang='ts'>
  import { useEventListener } from 'runed'
  import type { HTMLImgAttributes } from 'svelte/elements'

  interface Props extends HTMLImgAttributes {}

  const { src, ...props }: Props = $props()

  let el: HTMLImageElement | undefined = $state()
  let loaded = $state(false)

  let stop = false
  const rsz = () => {
    if (!el || stop)
      return
    stop = true

    const w = el.naturalWidth
    const pw = el.parentElement?.clientWidth || 0
    el.style.width = `${w * ~~Math.max(1, pw / w)}px`
    el.style.imageRendering = 'initial'
    if (pw >= w) {
      el.style.imageRendering = 'pixelated'
    }

    loaded = true
    setTimeout(() => stop = false, 50)
  }

  useEventListener(() => window, 'resize', rsz)
</script>

<div class='w-full'>
  <img
    bind:this={el}
    class="{loaded ? 'opacity-100' : 'opacity-0'} block mx-auto mt-6 md:mt-8' max-w-full ofade-200"
    decoding='async'
    loading='lazy'
    onload={rsz}
    {src}
    {...props}
  />
</div>
