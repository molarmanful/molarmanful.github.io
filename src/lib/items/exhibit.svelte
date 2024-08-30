<script lang='ts' module>
  export const desc = '2020 - made in collaboration with Li Cheng and Amy Kang. A concept for a virtual exhibition space that displays contemporary Asian art.'
  export const tags = ['digital', 'front-end', 'dev', 'design', 'art']
  export const year = 2020
</script>

<script lang='ts'>
  import { A, Heading, MediaImg, Prose, Sp, Subheading, Text } from '../mixins'
</script>

<Prose>
  <Heading>PERFORMING IDENTITY</Heading>
  <Subheading>{desc}</Subheading>
  <Text>
    <A href='https://bennyboy.tech/exhibit'>Website</A>
    (best viewed with a physical keyboard)
    <br />
    <A href='https://github.com/molarmanful/exhibit'>Source</A>
  </Text>

  <Sp />
  <MediaImg
    name='exhibit'
    alt='The Performing Identity virtual exhibit space.'
  />
  <MediaImg
    name='exhibit_desc'
    alt='Description of the Performing Identity exhibit.'
  />
</Prose>
