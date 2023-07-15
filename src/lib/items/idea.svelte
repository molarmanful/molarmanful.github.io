<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, Text, A, MediaImg } from '../mixins'

  export let D

  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>IDEA</Heading>
  <Subheading>
    2019 - made in collaboration with Jana Počuchová. An interactive webcomic
    about creative block and ideation.
  </Subheading>
  <Text>
    <A href="http://www.bp1574.nyuadim.com/comic/">Website</A>
  </Text>

  <div mt-16 />
  <MediaImg {D} name="idea" />
</Prose>
