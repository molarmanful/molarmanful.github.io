<script lang='ts' module>
  export const title = 'KIRSCH'
  export const desc = '2024. A versatile bitmap font with an organic flair. Features extensive Unicode and Nerd Fonts support.'
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

  <p><A href='https://github.com/molarmanful/kirsch'>Source</A></p>
</Prose>

<PxImg
  alt='Sample of the kirsch font.'
  src='https://github.com/molarmanful/kirsch/raw/main/img/all.png'
/>
<PxImg
  alt='All glyphs in the kirsch font.'
  src='https://github.com/molarmanful/kirsch/raw/main/img/chars.png'
/>
