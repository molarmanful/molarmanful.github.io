<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, MediaImg, YTVideo, Sp } from '../mixins'

  export let D
  export let desc =
    '2022 - Mechanically Minimalist Recliner. A prototype chair that plays with the contrast between rigidity and flexibility. Made from clear acrylic and bungee cords.'

  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>MMR</Heading>
  <Subheading>{desc}</Subheading>

  <Sp />
  <MediaImg {D} name="mmr" />
  <MediaImg {D} name="mmr1" />
  <MediaImg {D} name="mmr2" />
  <MediaImg {D} name="mmr-poster" />
  <YTVideo a="raL5G8X2FRs" title="MMR" />
</Prose>
