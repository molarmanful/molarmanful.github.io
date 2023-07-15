<script>
  import { onMount } from 'svelte'
  import {
    Prose,
    Heading,
    Subheading,
    Text,
    A,
    MediaImg,
    YTVideo,
  } from '../mixins'

  export let D

  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>HYPO NORMAL</Heading>
  <Subheading>
    2022. An abstract Unity study of worldbuilding centered around non-Euclidean
    traversal mechanics.
  </Subheading>
  <Text>
    <A href="https://bandidojim.itch.io/hyponormal">Website</A>
  </Text>
  <Text>
    <em>There's normal, there's paranormal, and then there's... HYPONORMAL.</em>
  </Text>
  <Text>
    Imagine a world encapsulated inside a sphere such that gravity - rather than
    attracting towards the center of mass - instead repels outwards. What would
    walking in such a counterintuitive world feel like? How would people inhabit
    and develop this world over time? What kind of stories does this world have
    to tell?
  </Text>
  <Text>
    This non-Newtonian, non-Euclidean premise formed the basis for HYPONORMAL, a
    barren desert microworld battered and beaten by perpetual sandstorms. You
    are granted a unique opportunity to tread across these unforgiving lands and
    experience the spherical prison that eternally tethers you - and the ones
    who fell before you - to the ground.
  </Text>

  <div mt-16 />
  <MediaImg {D} name="hyponormal0" />
  <MediaImg {D} name="hyponormal1" />
  <MediaImg {D} name="hyponormal2" />
  <MediaImg {D} name="hyponormal3" />
  <MediaImg {D} name="hyponormal4" />
  <MediaImg {D} name="hyponormal5" />
  <MediaImg {D} name="hyponormal6" />
  <YTVideo x a="EeSWXgkycRY" title="HYPONORMAL" />
</Prose>
