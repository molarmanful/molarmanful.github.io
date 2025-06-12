<script lang='ts' module>
  export const title = 'MMR'
  export const desc = '2022. Mechanically Minimalist Recliner, a prototype chair that plays with the contrast between rigidity and flexibility. Made from clear acrylic and bungee cords.'
  export const tags = ['physical', 'design', 'art']
  export const year = 2022
</script>

<script lang='ts'>
  import MediaImg from '$lib/components/MediaImg.svelte'
  import Prose from '$lib/components/Prose.svelte'
  import Subheading from '$lib/components/Subheading.svelte'
  import YTVideo from '$lib/components/YTVideo.svelte'
</script>

<Prose>
  <h1>{title}</h1>
  <Subheading>{desc}</Subheading>

  <MediaImg name='mmr' alt='The Mechanically Minimalist Recliner (MMR).' />
  <MediaImg name='mmr1' alt='The MMR unfolded into recliner mode.' />
  <MediaImg name='mmr2' alt='The MMR folded into chair mode.' />
  <MediaImg name='mmr-poster' alt='Poster for the MMR.' />
  <YTVideo a='raL5G8X2FRs' title='MMR' />
</Prose>
