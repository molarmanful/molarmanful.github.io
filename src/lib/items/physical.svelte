<script lang='ts' module>
  export const meta = {
    title: 'THE PHYSICAL COLLECTION',
    desc:
      'Sculptures and installations which follow arbitrary rules and fulfill arbitrary purposes.',
    tags: ['physical', 'art', 'collection'],
    year: 2021,
  }
</script>

<script lang='ts'>
  import ArtImg from '#lib/components/ArtImg.svelte'
  // import MediaImg from '#lib/components/MediaImg.svelte'
  import Prose from '#lib/components/Prose.svelte'
  import Subheading from '#lib/components/Subheading.svelte'
  import { artalt } from '#lib/ts/meta.ts'
</script>

<Prose>
  <h1>{meta.title}</h1>
  <Subheading>{meta.desc}</Subheading>
</Prose>

<ArtImg name='wireball' alt={artalt('WIREBALL')} />
<!-- <ArtImg name='pangolin' alt={artalt('PROJECT PANGOLIN')} /> -->
<!-- <MediaImg
  name='pangolin_stare'
  alt='Ben Pang peeking out from underneath Project Pangolin.'
/> -->
