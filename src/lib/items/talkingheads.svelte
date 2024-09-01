<script lang='ts' module>
  export const desc = '2023. An experimental chatroom that enables mere mortals to communicate with the gods.'
  export const tags = [
    'digital',
    'full-stack',
    'front-end',
    'back-end',
    'dev',
    'design',
    'art',
  ]
  export const year = 2023
</script>

<script lang='ts'>
  import { A, Heading, MediaImg, Prose, Sp, Subheading, Text } from '$lib/components'
</script>

<Prose>
  <Heading>TALKING-HEADS</Heading>
  <Subheading>{desc}</Subheading>
  <Text>
    <A href='https://talking-heads.fly.dev'>Website</A>
    <br />
    <A href='https://github.com/molarmanful/talking-heads'>Source</A>
  </Text>

  <Sp />
  <MediaImg name='talking-heads' alt='The talking-heads chatroom.' />
</Prose>
