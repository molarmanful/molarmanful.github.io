<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, Text, A, MediaImg } from '../mixins'

  export let D

  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>IT ALL GOES TO SHIT</Heading>
  <Subheading>
    2023. An interactive 3D web experience inspired by the slow yet
    frighteningly inevitable progression of dementia.
  </Subheading>
  <Text>
    <A href="https://bennyboy.tech/itallgoestoshit">Website</A> (best viewed on desktop)
    <br />
    <A href="https://github.com/molarmanful/itallgoestoshit">Source</A>
  </Text>

  <div mt-16 />
  <MediaImg {D} name="itallgoestoshit" />
</Prose>
