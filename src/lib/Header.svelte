<script>
  import { HeaderTitle, HeaderSubtitle, HeaderSplash } from '$lib/mixins'
  import { offtop } from './js/util'

  export let D
  export let top = { name: 'top' }

  let update = n => {
    top.n = n
    top = top
  }
</script>

<header relative screen use:offtop={{ update }}>
  <div fixed flex full style:filter="hue-rotate({D.factor * -69}deg)">
    <HeaderSplash
      {D}
      absolute=""
      bottom="0"
      right="0 media-squarish:40%"
      un-transform="media-squarish:translate-x-1/2"
      mx="auto"
      h="full xl:3/4"
    />
    <div
      m="auto xl:(l-1/8 r-auto y-auto) 2xl:l-1/5"
      z-10
      h="xl:1/3"
      p-8
      backdrop="lt-xl:grayscale"
      bg="lt-xl:black/42"
      style:opacity={1 - D.factor * 2}
    >
      <HeaderTitle />
      <HeaderSubtitle block="" m="t-4 l-1 lg:l-2" />
    </div>
  </div>
</header>
