<script lang='ts'>
  import A from '#lib/components/A.svelte'
  import Prose from '#lib/components/Prose.svelte'
  import PxImg from '#lib/components/PxImg.svelte'
  import Subheading from '#lib/components/Subheading.svelte'
  import { items } from '#lib/ts/items.ts'

  const meta = items.anakron
</script>

<Prose>
  <h1>{meta.title}</h1>
  <Subheading>{meta.desc}</Subheading>

  <p><A href='https://github.com/molarmanful/ANAKRON'>Source</A></p>
</Prose>

<PxImg
  alt='Sample of the ANAKRON font.'
  src='https://github.com/molarmanful/ANAKRON/raw/main/img/all.png'
/>
<PxImg
  alt='All glyphs in the ANAKRON font.'
  src='https://github.com/molarmanful/ANAKRON/raw/main/img/chars.png'
/>
