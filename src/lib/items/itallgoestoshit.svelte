<script lang='ts' module>
  export const meta = {
    title: 'IT ALL GOES TO SHIT',
    desc:
      '2023. An interactive 3D web experience inspired by the slow yet frighteningly inevitable progression of dementia.',
    tags: ['digital', '3d', 'front-end', 'dev', 'art'],
    year: 2023,
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
    <A href='https://benpa.ng/itallgoestoshit'>Website</A> (best viewed on
    desktop)
    <br />
    <A href='https://github.com/molarmanful/itallgoestoshit'>Source</A>
  </p>

  <MediaImg name='itallgoestoshit' alt='The itallgoestoshit web experience.' />
</Prose>
