<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, Text, A, MediaImg } from '../mixins'

  export let D

  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>LARUELLE</Heading>
  <Subheading>
    2020. Using visualization techniques to gain data-driven insights into
    Laruelle's Dictionary of Non-Philosophy.
  </Subheading>
  <Text><A href="https://github.com/molarmanful/laruelle">Source</A></Text>

  <div mt-8 />
  <MediaImg {D} name="laruelle" />
</Prose>
