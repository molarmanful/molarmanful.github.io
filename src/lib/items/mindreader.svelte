<script lang='ts' module>
  export const meta = {
    title: "MINDREADER'S DIGEST",
    desc:
      '2020. An e-magazine from a hypothetical retro-future in which thought-based communication is made possible via brain implants.',
    tags: ['digital', 'front-end', 'dev', 'design', 'art'],
    year: 2020,
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
    <A href='https://benpa.ng/mindreaders-digest'>Website</A>
    (best viewed with a physical keyboard)
    <br />
    <A href='https://github.com/molarmanful/mindreaders-digest'>Source</A>
  </p>

  <MediaImg
    name='mindreader'
    alt="The MindReader's Digest e-magazine interface."
  />
  <MediaImg
    name='mindreader-desc'
    alt="Description of the MindReader's Digest."
  />
  <MediaImg
    name='mindreader-article'
    alt="Sample article from the MindReader's Digest."
  />
</Prose>
