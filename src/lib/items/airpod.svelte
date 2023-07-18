<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, Text, A, MediaImg, Sp } from '../mixins'

  export let D
  export let desc =
    "2019 - made in collaboration with Ganjina Oripova and Fay Zhuang. Website for a silent short film made in 30 minutes which poked fun at the culture around Apple's AirPods."

  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>AIRPOD ADDICTION</Heading>
  <Subheading>{desc}</Subheading>
  <Text>
    <A href="http://bp1574.nyuadim.com/30mff">Website</A> (best viewed on desktop)
  </Text>

  <Sp />
  <MediaImg {D} name="30mff" />
</Prose>
