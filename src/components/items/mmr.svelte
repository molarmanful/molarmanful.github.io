<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, MediaImg, YTVideo } from '../mixins'

  export let D

  onMount(_ => {
    D.lazy.update()
  })
</script>

<Prose>
  <Heading>MECHANICALLY MINIMALIST RECLINER</Heading>
  <Subheading>
    2022 - A prototype chair that plays with the contrast between rigidity and
    flexibility. Made from clear acrylic and bungee cords.
  </Subheading>

  <div mt-8 />
  <MediaImg {D} name="mmr" />
  <MediaImg {D} name="mmr1" />
  <MediaImg {D} name="mmr2" />
  <MediaImg {D} name="mmr-poster" />
  <YTVideo x a="raL5G8X2FRs" title="MMR" />
</Prose>
