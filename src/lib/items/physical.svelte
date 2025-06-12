<script lang='ts' module>
  export const title = 'THE PHYSICAL COLLECTION'
  export const desc = 'Sculptures and installations which follow arbitrary rules and fulfill arbitrary purposes.'
  export const tags = ['physical', 'art', 'collection']
  export const year = 2021
</script>

<script lang='ts'>
  import ArtImg from '$lib/components/ArtImg.svelte'
  import MediaImg from '$lib/components/MediaImg.svelte'
  import Prose from '$lib/components/Prose.svelte'
  import Subheading from '$lib/components/Subheading.svelte'
  import { artalt } from '$lib/ts/util.svelte'
</script>

<Prose>
  <h1>{title}</h1>
  <Subheading>{desc}</Subheading>
</Prose>

<ArtImg name='wireball' alt={artalt('WIREBALL')} />
<ArtImg name='pangolin' alt={artalt('PROJECT PANGOLIN')} />
<MediaImg
  name='pangolin_stare'
  alt='Ben Pang peeking out from underneath Project Pangolin.'
/>
