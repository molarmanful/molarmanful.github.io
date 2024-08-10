<script>
  import { fadeonly, offtop, sfactor } from './js/util.svelte'
  import { HeaderSplash, HeaderTitle } from './mixins'

  let { top } = $props()

  let factor = $state(0)
  sfactor(x => (factor = x))

  let el = $state()
  offtop(
    () => el,
    ot => top?.({ name: 'top', n: ot })
  )

  const fo = fadeonly()
</script>

<header bind:this={el} relative screen>
  <div style:filter="hue-rotate({factor * -69}deg)" fixed flex full>
    <HeaderSplash
      absolute=""
      h="lvh"
      mx="auto"
      right="0 media-squarish:40%"
      top="0"
      un-transform="media-squarish:translate-x-1/2"
    />
    <div
      style:opacity={1 - factor * 4}
      style:transform={fo.matches ? 'none' : `translateY(-${factor * 10}%)`}
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
