<script>
  import { A, Heading, MediaImg, Prose, Sp, Subheading, Text } from '../mixins'

  export let desc =
    '2020 - made in collaboration with Li Cheng and Amy Kang. A concept for a virtual exhibition space that displays contemporary Asian art.'
</script>

<Prose>
  <Heading>PERFORMING IDENTITY</Heading>
  <Subheading>{desc}</Subheading>
  <Text>
    <A href="https://bennyboy.tech/exhibit">Website</A> (best viewed with a physical
    keyboard)<br /><A href="https://github.com/molarmanful/exhibit">Source</A>
  </Text>

  <Sp />
  <MediaImg name="exhibit" />
  <MediaImg name="exhibit_desc" />
</Prose>
