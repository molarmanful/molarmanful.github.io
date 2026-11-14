<script lang='ts'>
  import A from '#lib/components/A.svelte'
  import MediaImg from '#lib/components/MediaImg.svelte'
  import Prose from '#lib/components/Prose.svelte'
  import Subheading from '#lib/components/Subheading.svelte'
  import { items } from '#lib/ts/items.ts'

  const meta = items.exhibit
</script>

<Prose>
  <h1>{meta.title}</h1>
  <Subheading>{meta.desc}</Subheading>

  <p>
    <A href='https://benpa.ng/exhibit'>Website</A>
    (best viewed with a physical keyboard)
    <br />
    <A href='https://github.com/molarmanful/exhibit'>Source</A>
  </p>

  <MediaImg
    name='exhibit'
    alt='The Performing Identity virtual exhibit space.'
  />
  <MediaImg
    name='exhibit_desc'
    alt='Description of the Performing Identity exhibit.'
  />
</Prose>
