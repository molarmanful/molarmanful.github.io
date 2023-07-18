<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, Text, A, MediaImg, Sp } from '../mixins'

  export let D
  export let desc =
    '2019 - made in collaboration with Jana Počuchová. An interactive webcomic about creative block and ideation.'

  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>IDEA</Heading>
  <Subheading>{desc}</Subheading>
  <Text>
    <A href="http://www.bp1574.nyuadim.com/comic/">Website</A>
  </Text>

  <Sp />
  <MediaImg {D} name="idea" />
</Prose>
