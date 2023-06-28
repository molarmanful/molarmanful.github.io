<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, Text, A, MediaImg } from '../mixins'

  export let D

  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>AIRPOD ADDICTION</Heading>
  <Subheading>
    2019 - made in collaboration with Ganjina Oripova and Fay Zhuang. Website
    for a silent short film made in 30 minutes which poked fun at the culture
    around Apple's AirPods.
  </Subheading>
  <Text>
    <A href="http://bp1574.nyuadim.com/30mff">Website</A> (best viewed on desktop)
  </Text>

  <div mt-8 />
  <MediaImg {D} name="30mff" />
</Prose>
