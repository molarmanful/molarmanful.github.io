<script>
  const { src, ...props } = $props()

  let el = $state()
  let loaded = $state(false)

  const rsz = () => {
    const w = el.naturalWidth
    const pw = el.parentElement.clientWidth
    el.style.width = w * ~~Math.max(1, el.parentElement.clientWidth / w) + 'px'
    el.style.imageRendering = 'initial'
    if (pw >= w) {
      el.style.imageRendering = 'pixelated'
    }
    loaded = true
  }

  $effect(() => {
    addEventListener('resize', rsz)

    return () => {
      removeEventListener('resize', rsz)
    }
  })
</script>

<div w-full>
  <img
    bind:this={el}
    class={loaded ? 'opacity-100' : 'opacity-0'}
    block=""
    decoding="async"
    loading="lazy"
    m="x-auto t-6 md:t-8"
    max-w="full"
    ofade="200"
    onload={rsz}
    {src}
    {...props}
  />
</div>
