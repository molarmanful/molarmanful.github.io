<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, Text, A, MediaImg, Sp } from '../mixins'

  export let D
  export let desc =
    "2020 - Made in collaboration with Leo El-Azhab and Mai Khaled. Data visualization of the UAE's ISPs and their constituent IP addresses to provoke discussions about net neutrality and security."

  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>10K IPS</Heading>
  <Subheading>{desc}</Subheading>
  <Text>
    <A href="https://bennyboy.tech/ipisp">Website</A>
    <br />
    <A href="https://github.com/molarmanful/ipisp">Source</A>
  </Text>

  <Sp />
  <MediaImg {D} name="ipisp" />
</Prose>
