<script context="module">
  export const desc =
    '2020. An e-magazine from a hypothetical future in which thought-based communication is made possible via brain implants.'
  export const tags = ['digital', 'front-end', 'dev', 'design', 'art']
</script>

<script>
  import { A, Heading, MediaImg, Prose, Sp, Subheading, Text } from '../mixins'
</script>

<Prose>
  <Heading>MIND<wbr />READER'S DIGEST</Heading>
  <Subheading>{desc}</Subheading>
  <Text>
    <A href="https://bennyboy.tech/mindreaders-digest">Website</A> (best viewed with
    a physical keyboard)
    <br />
    <A href="https://github.com/molarmanful/mindreaders-digest">Source</A>
  </Text>

  <Sp />
  <MediaImg name="mindreader" />
  <MediaImg name="mindreader-desc" />
  <MediaImg name="mindreader-article" />
</Prose>
