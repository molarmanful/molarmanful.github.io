<script>
  import { getContext } from 'svelte'

  import { Video } from '.'

  let { a, aspect = 'square' } = $props()
  const vloader = getContext('vloader')

  let el = $state()
  let loaded = $state(false)

  $effect(() => {
    vloader.observe(el)

    return () => vloader.unobserve(el)
  })
</script>

<Video {aspect}>
  <div class="aspect-{aspect}" max-full mx-auto>
    <video
      bind:this={el}
      class={loaded ? 'opacity-100' : 'opacity-0'}
      full
      loop
      muted
      object-contain
      ofade-200
      oncanplaythrough={() => (loaded = true)}
      playsinline
      preload="none"
    >
      <source src="https://i.imgur.com/{a}.mp4" type="video/mp4" />
    </video>
  </div>
</Video>
