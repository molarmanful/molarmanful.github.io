<script lang='ts' module>
  export const title = 'ANAKRON'
  export const desc = '2025. A thicc retrofuturistic bitmap font made for the modern screen.'
  export const tags = ['typography', 'design']
  export const year = 2025
</script>

<script lang='ts'>
  import A from '$lib/components/A.svelte'
  import Prose from '$lib/components/Prose.svelte'
  import PxImg from '$lib/components/PxImg.svelte'
  import Subheading from '$lib/components/Subheading.svelte'
</script>

<Prose>
  <h1>{title}</h1>
  <Subheading>{desc}</Subheading>

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
