<script lang='ts' module>
  export const desc = 'Sculptures and installations which follow arbitrary rules and fulfill arbitrary purposes.'
  export const tags = ['physical', 'art', 'collection']
  export const year = 2021
</script>

<script lang='ts'>
  import { ArtImg, Heading, MediaImg, Prose, Subheading } from '$lib/components'
  import { artalt } from '$lib/js/util.svelte'
</script>

<Prose>
  <Heading>THE PHYSICAL COLLECTION</Heading>
  <Subheading>{desc}</Subheading>
</Prose>

<ArtImg name='wireball' alt={artalt('WIREBALL')} />
<ArtImg name='pangolin' alt={artalt('PROJECT PANGOLIN')} />
<MediaImg
  name='pangolin_stare'
  alt='Ben Pang peeking out from underneath Project Pangolin.'
/>
