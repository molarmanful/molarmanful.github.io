<script lang='ts'>
  import ScrollTrigger from 'gsap/dist/ScrollTrigger'

  import { Video } from '.'

  import { cscroll } from '$lib/js/contexts'

  interface Props {
    a: string
    px?: boolean
    aspect?: string
  }

  const { a, px, aspect = 'square' }: Props = $props()

  let loaded = $state(false)
  const scroller = cscroll.get()

  let st = $state<ScrollTrigger>()

  const loader = (node: HTMLVideoElement) => {
    const f = () => node.load()

    st = ScrollTrigger.create({
      trigger: node,
      scroller: scroller?.x,
      start: 'top bottom+=100px',
      end: 'bottom top-=100px',
      onToggle: f,
    })

    return { destroy: () => st?.kill() }
  }
</script>

<Video {aspect}>
  <div class='aspect-{aspect} max-full mx-auto'>
    <video
      class="{loaded ? 'opacity-100' : 'opacity-0'} {px ? 'image-render-pixel' : ''} full object-contain ofade-200"
      autoplay={loaded || void 0}
      loop
      muted
      oncanplaythrough={() => {
        loaded = true
        st?.kill()
      }}
      playsinline
      preload='none'
      use:loader
    >
      <source src='https://i.imgur.com/{a}.mp4' type='video/mp4' />
    </video>
  </div>
</Video>
