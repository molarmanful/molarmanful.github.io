<script lang='ts'>
  import MediaImg from '#lib/components/MediaImg.svelte'
  import Prose from '#lib/components/Prose.svelte'
  import Subheading from '#lib/components/Subheading.svelte'
  import YTVideo from '#lib/components/YTVideo.svelte'
  import { items } from '#lib/ts/items.ts'

  const meta = items.mmr
</script>

<Prose>
  <h1>{meta.title}</h1>
  <Subheading>{meta.desc}</Subheading>

  <MediaImg name='mmr' alt='The Mechanically Minimalist Recliner (MMR).' />
  <MediaImg name='mmr1' alt='The MMR unfolded into recliner mode.' />
  <MediaImg name='mmr2' alt='The MMR folded into chair mode.' />
  <MediaImg name='mmr-poster' alt='Poster for the MMR.' />
  <YTVideo a='raL5G8X2FRs' title='MMR' />
</Prose>
