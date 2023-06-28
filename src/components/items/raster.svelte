<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, ArtImg, YTVideo } from '../mixins'

  export let D

  onMount(_ => {
    D.lazy.update()
  })
</script>

<Prose>
  <Heading>THE RASTER COLLECTION</Heading>
  <Subheading>
    Because black & white is fun, but so is color. Drawn with a mouse in
    HEAVYPAINT/Krita/MS Paint.
  </Subheading>
</Prose>

<ArtImg {D} name="fashionablegirl" />
<ArtImg {D} name="flintstoneshouse" />
<ArtImg {D} name="caveopening" />
<ArtImg {D} name="wackoface" />
<ArtImg {D} name="busta" />
<ArtImg {D} name="blossoms" />
<ArtImg {D} name="foryasmin" />
<ArtImg {D} name="kai" />
<div mt-8 />
<YTVideo a="5kqdi0ExSMo" title="Family Dinner" />
<div mt-8 />
<ArtImg {D} name="skullmap" />
<ArtImg {D} name="pinkdunes" />
<ArtImg {D} name="insomnia" />
<ArtImg {D} name="goated" />
<ArtImg {D} name="letshangout" />
<ArtImg {D} name="jigglyscuff" />
<ArtImg {D} name="buffkirby" />
