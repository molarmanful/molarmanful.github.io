<script>
  import {
    Factor,
    HeaderSplash,
    HeaderSubtitle,
    HeaderTitle,
    OffTop,
  } from './mixins'

  export let top = { name: 'top' }

  let factor
  let ot

  $: {
    top.n = ot
    top = top
  }
</script>

<Factor bind:factor />

<OffTop bind:ot let:useResizeObserver>
  <header relative screen use:useResizeObserver>
    <div style:filter="hue-rotate({factor * -69}deg)" fixed flex full>
      <HeaderSplash
        absolute=""
        bottom="0"
        h="full xl:3/4"
        mx="auto"
        right="0 media-squarish:40%"
        un-transform="media-squarish:translate-x-1/2"
      />
      <div
        style:opacity={1 - factor * 2}
        backdrop="lt-xl:grayscale"
        bg="lt-xl:black/42"
        h="xl:1/3"
        m="auto xl:(l-1/8 r-auto y-auto) 2xl:l-1/5"
        p-8
        z-10
      >
        <HeaderTitle />
        <HeaderSubtitle block="" m="t-4 l-1 lg:l-2" />
      </div>
    </div>
  </header>
</OffTop>
