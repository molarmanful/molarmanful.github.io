<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, Text, A, MediaImg } from '../mixins'

  export let D

  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>10K IPS</Heading>
  <Subheading>
    2020 - Made in collaboration with Leo El-Azhab and Mai Khaled. Data
    visualization of the UAE's ISPs and their constituent IP addresses to
    provoke discussions about net neutrality and security.
  </Subheading>
  <Text>
    <A href="https://bennyboy.tech/ipisp">Website</A>
    <br />
    <A href="https://github.com/molarmanful/ipisp">Source</A>
  </Text>

  <div mt-16 />
  <MediaImg {D} name="ipisp" />
</Prose>
