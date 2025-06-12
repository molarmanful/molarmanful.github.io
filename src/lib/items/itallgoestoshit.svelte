<script lang='ts' module>
  export const title = 'IT ALL GOES TO SHIT'
  export const desc = '2023. An interactive 3D web experience inspired by the slow yet frighteningly inevitable progression of dementia.'
  export const tags = ['digital', '3d', 'front-end', 'dev', 'art']
  export const year = 2023
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
    <A href='https://benpa.ng/itallgoestoshit'>Website</A> (best viewed on desktop)
    <br />
    <A href='https://github.com/molarmanful/itallgoestoshit'>Source</A>
  </p>

  <MediaImg name='itallgoestoshit' alt='The itallgoestoshit web experience.' />
</Prose>
