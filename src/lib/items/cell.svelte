<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, Text, A, MediaImg } from '../mixins'

  export let D

  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>THE CELL COLLECTION</Heading>
  <Subheading>
    Zero-player games with squares that live many, many lives.
  </Subheading>

  <div mt-16 />
  <Subheading bold>3-Species Ecosystem</Subheading>
  <MediaImg {D} name="3species" />
  <Text>
    <A href="https://bennyboy.tech/RobotaPsyche/midterm">Website</A>
    <br />
    <A href="https://github.com/molarmanful/RobotaPsyche/tree/main/midterm">
      Source
    </A>
  </Text>

  <div mt-16 />
  <Subheading bold>Reddit Rainbow (feat. Adham Chakohi)</Subheading>
  <MediaImg {D} name="rainbow" />
  <Text>
    <A href="https://bennyboy.tech/rainbow">Website</A>
    <br />
    <A href="https://github.com/molarmanful/rainbow">Source</A>
  </Text>

  <div mt-16 />
  <Subheading bold>Waterworks</Subheading>
  <MediaImg {D} name="waterworks" />
  <Text>
    <A href="https://codepen.io/molarmanful/full/XzbwpP">Website</A>
  </Text>
</Prose>
