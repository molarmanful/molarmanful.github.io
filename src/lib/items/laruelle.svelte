<script lang='ts' module>
  export const desc = '2020. Using visualization techniques to gain data-driven insights into Laruelle\'s Dictionary of Non-Philosophy.'
  export const tags = ['digital', 'data-sci', 'dev']
  export const year = 2020
</script>

<script lang='ts'>
  import { A, Heading, MediaImg, Prose, Sp, Subheading, Text } from '$lib/components'
</script>

<Prose>
  <Heading>LARUELLE</Heading>
  <Subheading>{desc}</Subheading>
  <Text><A href='https://github.com/molarmanful/laruelle'>Source</A></Text>

  <Sp />
  <MediaImg
    name='laruelle'
    alt="A directed graph of lexical items and cited philosophers in Francois Laruelles' Dictionary of Non-Philosophy."
  />
</Prose>
