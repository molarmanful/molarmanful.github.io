<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, Text, A, MediaImg } from '../mixins'

  export let D

  onMount(_ => {
    D.lazy.update()
  })
</script>

<Prose>
  <Heading>THE CELL COLLECTION</Heading>
  <Subheading>
    Zero-player games with squares that live many, many lives.
  </Subheading>

  <div mt-16 />
  <MediaImg {D} name="3species" />
  <Text>
    3-Species Ecosystem - <A href="https://bennyboy.tech/RobotaPsyche/midterm"
      >Website</A
    >, <A href="https://github.com/molarmanful/RobotaPsyche/tree/main/midterm"
      >Source</A
    >
  </Text>

  <div mt-16 />
  <MediaImg {D} name="rainbow" />
  <Text>
    Reddit Rainbow (feat. Adham Chakohi) - <A
      href="https://bennyboy.tech/rainbow">Website</A
    >, <A href="https://github.com/molarmanful/rainbow">Source</A>
  </Text>

  <div mt-16 />
  <MediaImg {D} name="waterworks" />
  <Text>
    Waterworks - <A href="https://codepen.io/molarmanful/full/XzbwpP">Website</A
    >
  </Text>
</Prose>
