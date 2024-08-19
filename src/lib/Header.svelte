<script>
  import { fadeonly, redmote, sfactor } from './js/util.svelte'
  import { HeaderSplash, HeaderTitle } from './mixins'

  let { top = () => {} } = $props()

  let factor = $state(0)
  const rm = redmote()
  const fo = fadeonly()
  const fac_inv = $derived(Math.max(0, 1 - factor))
  sfactor(x => (factor = x))

  let innerWidth = $state(0)
  let innerHeight = $state(0)
  const mouse = $state({ x: 0, y: 0 })
  const mouse_rel = $derived(
    rm.matches || factor >= 1 ?
      { x: 0, y: 0 }
    : {
        x: ((mouse.x / innerWidth) * 2 - 1) * fac_inv,
        y: ((mouse.y / innerHeight) * 2 - 1) * fac_inv,
      }
  )
  const scale = $derived(1 + 0.1 * fac_inv)

  const splash_rel = $derived({
    x: -mouse_rel.x,
    y: -mouse_rel.y,
  })
  const title_rel = $derived({
    x: 0.5 * mouse_rel.x,
    y: 0.5 * mouse_rel.y - !fo.matches * factor * 10,
  })

  top('top')
</script>

<svelte:window
  onmousemove={({ clientX, clientY }) => {
    mouse.x = clientX
    mouse.y = clientY
  }}
  bind:innerWidth
  bind:innerHeight
/>

<header id="top" relative screen>
  <div style:filter="hue-rotate({factor * -69}deg)" fixed flex full>
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
      style:opacity={1 - factor * 4}
      style:transform="translateX({title_rel.x}%) translateY({title_rel.y}%)"
      absolute
      inset-0
    >
      <HeaderTitle />
    </div>
    <!--
      <div
        style:opacity={1 - factor * 2}
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
