<script>
  import { fadeonly, sfactor } from './js/util'
  import { HeaderSplash, HeaderTitle, OffTop } from './mixins'

  export let top = { name: 'top' }

  let factor = sfactor()

  let ot
  $: {
    top.n = ot
    top = top
  }

  let fo = fadeonly()
</script>

<OffTop bind:ot let:useResizeObserver>
  <header relative screen use:useResizeObserver>
    <div style:filter="hue-rotate({$factor * -69}deg)" fixed flex full>
      <HeaderSplash
        absolute=""
        bottom="0"
        h="full"
        mx="auto"
        right="0 media-squarish:40%"
        un-transform="media-squarish:translate-x-1/2"
      />
      <div
        style:opacity={1 - $factor * 4}
        style:transform={$fo ? 'none' : `translateY(-${$factor * 10}%)`}
        mix-blend-difference
        transition-transform,opacity-400
      >
        <HeaderTitle />
      </div>
      <!-- <div
        style:opacity={1 - $factor * 2}
        bg="lt-xl:black/42"
        m-auto
        mix-blend-difference
        p-8
        transition="opacity-400 delay-100"
      >
        <HeaderSubtitle block="" m="t-4 l-1 lg:l-2" />
      </div> -->
    </div>
  </header>
</OffTop>
