<script lang='ts'>
  import { cscroll } from '$lib/js/contexts'
  import ScrollTrigger from 'gsap/dist/ScrollTrigger'
  import { tick } from 'svelte'

  import { Video } from '.'

  interface Props {
    a: string
    px?: boolean
    aspect?: string
  }

  const { a, px, aspect = 'square' }: Props = $props()

  let loaded = $state(false)
  const scroller = cscroll.get()

  const loader = (node: HTMLVideoElement) => {
    let st: ScrollTrigger
    let destroy = () => {}

    tick().then(() => {
      st = ScrollTrigger.create({
        trigger: node,
        scroller: scroller?.x,
        start: 'top bottom+=100px',
        end: 'bottom top-=100px',
        onToggle() {
          node.load()
          node.autoplay = true
          st.kill()
        },
      })
      destroy = () => st.kill()
    })

    return { destroy }
  }
</script>

<Video {aspect}>
  <div class='mx-auto max-full {`aspect-${aspect}`}'>
    <video
      class="full object-contain ofade-200 {loaded ? 'opacity-100' : 'opacity-0'} {px ? 'image-render-pixel' : ''}"
      loop
      muted
      oncanplaythrough={() => {
        loaded = true
      }}
      playsinline
      preload='none'
      use:loader
    >
      <source src='https://i.imgur.com/{a}.mp4' type='video/mp4' />
    </video>
  </div>
</Video>
