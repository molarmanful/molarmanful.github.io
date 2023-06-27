<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, ArtImg } from '../mixins'

  export let D

  onMount(_ => {
    D.lazy.update()
  })
</script>

<Prose>
  <Heading>THE BLACK & WHITE COLLECTION</Heading>
  <Subheading>
    Monochrome artwork drawn with pen and paper or a mouse in Krita/MS Paint.
    Studies of contrast, shading, and value blending techniques.
  </Subheading>
</Prose>

<ArtImg {D} name="imperfect" />
<ArtImg {D} name="entropia" />
<ArtImg {D} name="ruler" />
<ArtImg {D} name="sketchedfaces" />
<ArtImg {D} name="sketchedfaces2" />
<ArtImg {D} name="hand" />
<ArtImg {D} name="valueblending" />
<ArtImg {D} name="blackpanther" />
<ArtImg {D} name="scream" />
<ArtImg {D} name="dehumanized" />
<ArtImg {D} name="scrawnyman" />
<ArtImg {D} name="mood" />
<ArtImg {D} name="walter" />
<ArtImg {D} name="yee" />
