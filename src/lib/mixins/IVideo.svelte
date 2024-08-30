<script>
  import { cD } from '../js/contexts'

  import { Video } from '.'

  const { a, px, aspect = 'square' } = $props()
  const { vloader } = cD.get()

  let el = $state()
  let loaded = $state(false)

  $effect(() => {
    vloader?.observe(el)

    return () => vloader?.unobserve(el)
  })
</script>

<Video {aspect}>
  <div class='aspect-{aspect}' max-full mx-auto>
    <video
      bind:this={el}
      class="{loaded ? 'opacity-100' : 'opacity-0'} {px
        ? 'image-render-pixel'
        : ''}"
      full
      loop
      muted
      object-contain
      ofade-200
      oncanplaythrough={() => (loaded = true)}
      playsinline
      preload='none'
    >
      <source src='https://i.imgur.com/{a}.mp4' type='video/mp4' />
    </video>
  </div>
</Video>
