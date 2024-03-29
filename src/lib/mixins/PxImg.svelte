<script>
  import { onMount } from 'svelte'

  import { Image } from '.'

  let el

  let style

  const rsz = () => {
    const w = el.naturalWidth
    el.style.width = w * ~~Math.max(1, el.parentElement.clientWidth / w) + 'px'
  }

  onMount(() => {
    style = getComputedStyle(el)
    rsz()
    addEventListener('resize', rsz)

    return () => {
      removeEventListener('resize', rsz)
    }
  })
</script>

<Image image-render-pixel="" max-h-initial="" bind:el {...$$restProps} />
