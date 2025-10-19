<script lang='ts' module>
  export const title = 'TALKING-HEADS'
  export const desc =
    '2023. An experimental chatroom that enables mere mortals to communicate with the gods.'
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
  import A from '$lib/components/A.svelte'
  import MediaImg from '$lib/components/MediaImg.svelte'
  import Prose from '$lib/components/Prose.svelte'
  import Subheading from '$lib/components/Subheading.svelte'
</script>

<Prose>
  <h1>{title}</h1>
  <Subheading>{desc}</Subheading>
  <p>
    <A href='https://talking-heads.fly.dev'>Website</A>
    <br />
    <A href='https://github.com/molarmanful/talking-heads'>Source</A>
  </p>

  <MediaImg name='talking-heads' alt='The talking-heads chatroom.' />
</Prose>
