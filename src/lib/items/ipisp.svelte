<script context="module">
  export const desc =
    "2020 - Made in collaboration with Leo El-Azhab and Mai Khaled. Data visualization of the UAE's ISPs and their constituent IP addresses to provoke discussions about net neutrality and security."
  export const tags = ['digital', 'front-end', 'dev', 'data-sci', 'art']
  export const year = 2020
</script>

<script>
  import { A, Heading, MediaImg, Prose, Sp, Subheading, Text } from '../mixins'
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
  <MediaImg name="ipisp" alt="The 10k IPs website." />
</Prose>
