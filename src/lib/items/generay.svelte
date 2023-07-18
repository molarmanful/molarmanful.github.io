<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, Text, A, MediaImg, Sp } from '../mixins'

  export let D
  export let desc =
    "2021. A procedurally-generated website based on Gene Ray's Time Cube."

  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>INFINITE GENE RAY</Heading>
  <Subheading>{desc}</Subheading>
  <Text>
    <A href="https://bennyboy.tech/infinite-gene-ray">Website</A>
    <br />
    <A href="https://github.com/molarmanful/infinite-gene-ray">Source</A>
    <br />
    <A href="https://timecube.2enp.com">Inspiration</A>
  </Text>

  <Sp />
  <MediaImg {D} name="generay" />
</Prose>
