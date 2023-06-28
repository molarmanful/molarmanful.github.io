<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, Text, A, MediaImg } from '../mixins'

  export let D

  onMount(_ => {
    D.lazy.update()
  })
</script>

<Prose>
  <Heading>INFINITE GENE RAY</Heading>
  <Subheading>
    2021. A procedurally-generated website based on Gene Ray's Time Cube.
  </Subheading>
  <Text>
    <A href="https://bennyboy.tech/infinite-gene-ray">Website</A>
    <br />
    <A href="https://github.com/molarmanful/infinite-gene-ray">Source</A>
    <br />
    <A href="https://timecube.2enp.com">Inspiration</A>
  </Text>

  <div mt-8 />
  <MediaImg {D} name="generay" />
</Prose>
