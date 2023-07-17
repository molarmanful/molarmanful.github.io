<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, Text, A, MediaImg } from '../mixins'

  export let D
  export let desc =
    "2020. Using visualization techniques to gain data-driven insights into Laruelle's Dictionary of Non-Philosophy."

  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>LARUELLE</Heading>
  <Subheading>{desc}</Subheading>
  <Text><A href="https://github.com/molarmanful/laruelle">Source</A></Text>

  <div mt-16 />
  <MediaImg {D} name="laruelle" />
</Prose>
