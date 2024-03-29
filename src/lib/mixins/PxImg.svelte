<script>
  import { onMount } from 'svelte'

  export let alt, src

  let el
  let loaded = false

  const rsz = () => {
    const w = el.naturalWidth
    console.log(w)
    el.style.width = w * ~~Math.max(1, el.parentElement.clientWidth / w) + 'px'
    loaded = true
  }

  onMount(() => {
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
    {alt}
    block
    image-render-pixel
    loading="lazy"
    m-auto
    max-w-screen
    ofade-200
    {src}
    {...$$restProps}
    on:load={rsz}
  />
</div>
