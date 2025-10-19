<script lang='ts' module>
  export const title = 'IDEA'
  export const desc =
    '2019 - made in collaboration with Jana Počuchová. An interactive webcomic about creative block and ideation.'
  export const tags = ['digital', 'front-end', 'dev', 'design', 'art']
  export const year = 2019
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
    <A href='http://www.bp1574.nyuadim.com/comic/'>Website</A>
  </p>

  <MediaImg name='idea' alt='The Idea website.' />
</Prose>
