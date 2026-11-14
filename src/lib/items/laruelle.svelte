<script lang='ts'>
  import A from '#lib/components/A.svelte'
  import MediaImg from '#lib/components/MediaImg.svelte'
  import Prose from '#lib/components/Prose.svelte'
  import Subheading from '#lib/components/Subheading.svelte'
  import { items } from '#lib/ts/items.ts'

  const meta = items.laruelle
</script>

<Prose>
  <h1>{meta.title}</h1>
  <Subheading>{meta.desc}</Subheading>

  <p><A href='https://github.com/molarmanful/laruelle'>Source</A></p>

  <MediaImg
    name='laruelle'
    alt="A directed graph of lexical items and cited philosophers in Francois Laruelles' Dictionary of Non-Philosophy."
  />
</Prose>
