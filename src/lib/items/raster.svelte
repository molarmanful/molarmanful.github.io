<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, ArtImg, YTVideo } from '../mixins'

  export let D
  export let desc =
    'Because black & white is fun, but so is color. Drawn with a mouse in HEAVYPAINT/Krita/MS Paint.'

  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>THE RASTER COLLECTION</Heading>
  <Subheading>{desc}</Subheading>
</Prose>

<ArtImg {D} name="fashionablegirl" />
<ArtImg {D} name="flintstoneshouse" />
<ArtImg {D} name="caveopening" />
<ArtImg {D} name="wackoface" />
<ArtImg {D} name="busta" />
<ArtImg {D} name="blossoms" />
<ArtImg {D} name="foryasmin" />
<ArtImg {D} name="kai" />
<YTVideo a="5kqdi0ExSMo" title="Family Dinner" aspect="square" />
<ArtImg {D} name="skullmap" />
<ArtImg {D} name="pinkdunes" />
