<script lang='ts'>
  import A from '#lib/components/A.svelte'
  import MediaImg from '#lib/components/MediaImg.svelte'
  import Prose from '#lib/components/Prose.svelte'
  import Subheading from '#lib/components/Subheading.svelte'
  import { items } from '#lib/ts/items.ts'

  const meta = items.generay
</script>

<Prose>
  <h1>{meta.title}</h1>
  <Subheading>{meta.desc}</Subheading>

  <p>
    <A href='https://benpa.ng/infinite-gene-ray'>Website</A>
    <br />
    <A href='https://github.com/molarmanful/infinite-gene-ray'>Source</A>
    <br />
    <A href='https://timecube.2enp.com'>Inspiration</A>
  </p>

  <MediaImg name='generay' alt='The Infinite Gene Ray website.' />
</Prose>
