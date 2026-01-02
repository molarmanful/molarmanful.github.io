<script lang='ts' module>
  export const title = 'BITED'
  export const desc = '2025. A bitmap font editor.'
  export const tags = ['typography', 'design', 'dev']
  export const year = 2026
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

  <p>
    <A href='https://benpa.ng/bited'>Website</A>
    <br />
    <A href='https://github.com/molarmanful/bited'>Source</A>
  </p>

  <MediaImg name='bited_ui' alt='bited UI.' />
</Prose>
