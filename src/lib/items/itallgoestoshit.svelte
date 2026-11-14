<script lang='ts'>
  import A from '#lib/components/A.svelte'
  import MediaImg from '#lib/components/MediaImg.svelte'
  import Prose from '#lib/components/Prose.svelte'
  import Subheading from '#lib/components/Subheading.svelte'
  import { items } from '#lib/ts/items.ts'

  const meta = items.itallgoestoshit
</script>

<Prose>
  <h1>{meta.title}</h1>
  <Subheading>{meta.desc}</Subheading>

  <p>
    <A href='https://benpa.ng/itallgoestoshit'>Website</A> (best viewed on
    desktop)
    <br />
    <A href='https://github.com/molarmanful/itallgoestoshit'>Source</A>
  </p>

  <MediaImg name='itallgoestoshit' alt='The itallgoestoshit web experience.' />
</Prose>
