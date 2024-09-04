<script lang='ts' module>
  export const desc = '2020. An e-magazine from a hypothetical retro-future in which thought-based communication is made possible via brain implants.'
  export const tags = ['digital', 'front-end', 'dev', 'design', 'art']
  export const year = 2020
</script>

<script lang='ts'>
  import { A, Heading, MediaImg, Prose, Sp, Subheading, Text } from '$lib/components'
</script>

<Prose>
  <Heading>MIND<wbr />READER'S DIGEST</Heading>
  <Subheading>{desc}</Subheading>
  <Text>
    <A href='https://bennyboy.tech/mindreaders-digest'>Website</A>
    (best viewed with a physical keyboard)
    <br />
    <A href='https://github.com/molarmanful/mindreaders-digest'>Source</A>
  </Text>

  <Sp />
  <MediaImg
    name='mindreader'
    alt="The MindReader's Digest e-magazine interface."
  />
  <MediaImg
    name='mindreader-desc'
    alt="Description of the MindReader's Digest."
  />
  <MediaImg
    name='mindreader-article'
    alt="Sample article from the MindReader's Digest."
  />
</Prose>
