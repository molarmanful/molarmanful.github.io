<script lang='ts' module>
  export const meta = {
    title: 'KIRSCH',
    desc:
      '2024. A versatile bitmap font with an organic flair. Features extensive Unicode and Nerd Fonts support.',
    tags: ['typography', 'design'],
    year: 2026,
  }
</script>

<script lang='ts'>
  import A from '#lib/components/A.svelte'
  import Prose from '#lib/components/Prose.svelte'
  import PxImg from '#lib/components/PxImg.svelte'
  import Subheading from '#lib/components/Subheading.svelte'
</script>

<Prose>
  <h1>{meta.title}</h1>
  <Subheading>{meta.desc}</Subheading>

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
