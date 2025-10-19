<script lang='ts' module>
  export const title = 'LARUELLE'
  export const desc =
    "2020. Using visualization techniques to gain data-driven insights into Laruelle's Dictionary of Non-Philosophy."
  export const tags = ['digital', 'data-sci', 'dev']
  export const year = 2020
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

  <p><A href='https://github.com/molarmanful/laruelle'>Source</A></p>

  <MediaImg
    name='laruelle'
    alt="A directed graph of lexical items and cited philosophers in Francois Laruelles' Dictionary of Non-Philosophy."
  />
</Prose>
