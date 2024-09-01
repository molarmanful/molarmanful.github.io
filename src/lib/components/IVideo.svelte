<script lang='ts'>
  import { cD } from '../js/contexts'

  import { Video } from '.'

  interface Props {
    a: string
    px?: boolean
    aspect?: string
  }

  const { a, px, aspect = 'square' }: Props = $props()
  const { vloader } = cD.get()

  let el: Element | undefined = $state()
  let loaded = $state(false)

  $effect(() => {
    if (!el)
      return

    vloader?.observe(el)

    return () => el && vloader?.unobserve(el)
  })
</script>

<Video {aspect}>
  <div class='aspect-{aspect} max-full mx-auto'>
    <video
      bind:this={el}
      class="{loaded ? 'opacity-100' : 'opacity-0'} {px ? 'image-render-pixel' : ''} full object-contain ofade-200"
      loop
      muted
      oncanplaythrough={() => (loaded = true)}
      playsinline
      preload='none'
    >
      <source src='https://i.imgur.com/{a}.mp4' type='video/mp4' />
    </video>
  </div>
</Video>
