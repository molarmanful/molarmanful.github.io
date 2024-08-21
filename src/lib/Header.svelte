<script>
  import { getContext } from 'svelte'

  import { fadeonly, redmote } from './js/util.svelte'
  import { HeaderSplash, HeaderTitle } from './mixins'

  const { top = () => {} } = $props()
  const factor = getContext('factor')

  const rm = redmote()
  const fo = fadeonly()
  const fac_inv = $derived(Math.max(0, 1 - factor.x))

  let innerWidth = $state(0)
  let innerHeight = $state(0)
  const mouse = $state({ x: 0.5, y: 0.5 })
  const mouse_rel = $derived(
    rm.matches || factor.x >= 1 ?
      { x: 0, y: 0 }
    : {
        x: (mouse.x * 2 - 1) * fac_inv,
        y: (mouse.y * 2 - 1) * fac_inv,
      }
  )
  const scale = $derived(1 + 0.1 * fac_inv)

  const splash_rel = $derived({
    x: -mouse_rel.x,
    y: -mouse_rel.y,
  })
  const title_rel = $derived({
    x: 0.5 * mouse_rel.x,
    y: 0.5 * mouse_rel.y,
  })

  top('top')
</script>

<svelte:window
  onmousemove={({ clientX, clientY }) => {
    if (fo.matches) return
    mouse.x = clientX / innerWidth
    mouse.y = clientY / innerHeight
  }}
  bind:innerWidth
  bind:innerHeight
/>

<header id="top" relative screen>
  <div style:filter="hue-rotate({factor.x * -69}deg)" fixed flex full>
    <HeaderSplash
      absolute=""
      h="lvh"
      mx="auto"
      right="0 media-squarish:40%"
      {scale}
      {splash_rel}
      top="0"
      un-transform="~ translate-x-[var(--t-x,0%)] media-squarish:translate-x-[calc(50%+var(--t-x,0%))]"
    />
    <div
      style:opacity={1 - factor.x * 4}
      style:transform="skewX({title_rel.x}deg) skewY({title_rel.y}deg) rotateX({title_rel.x}deg)
      rotateY({title_rel.y}deg) translateY({-!fo.matches * factor.x * 10}%)"
      absolute
      inset-0
    >
      <HeaderTitle {mouse_rel} />
    </div>
    <!--
      <div
        style:opacity={1 - factor.x * 2}
        bg="lt-xl:black/42"
        m-auto
        mix-blend-difference
        p-8
        transition="opacity-400 delay-100"
      >
        <HeaderSubtitle block="" m="t-4 l-1 lg:l-2" />
      </div>
      -->
  </div>
</header>
