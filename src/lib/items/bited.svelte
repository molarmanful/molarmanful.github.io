<script lang='ts' module>
  export const meta = {
    title: 'BITED',
    desc: '2025. A bitmap font editor.',
    tags: ['typography', 'design', 'dev'],
    year: 2026,
  }
</script>

<script lang='ts'>
  import A from '#lib/components/A.svelte'
  import MediaImg from '#lib/components/MediaImg.svelte'
  import Prose from '#lib/components/Prose.svelte'
  import Subheading from '#lib/components/Subheading.svelte'
</script>

<Prose>
  <h1>{meta.title}</h1>
  <Subheading>{meta.desc}</Subheading>

  <p>
    <A href='https://benpa.ng/bited'>Website</A>
    <br />
    <A href='https://github.com/molarmanful/bited'>Source</A>
  </p>

  <MediaImg name='bited_ui' alt='bited UI.' />
</Prose>
