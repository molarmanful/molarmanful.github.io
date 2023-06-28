<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, ArtImg } from '../mixins'

  export let D

  onMount(_ => {
    D.lazy.update()
  })
</script>

<Prose>
  <Heading>THE VECTOR COLLECTION</Heading>
  <Subheading>
    Scalable compositions of geometries and abstract oddities. Made with
    Illustrator and Hexels.
  </Subheading>
</Prose>

<ArtImg {D} name="plane" />
<ArtImg {D} name="meltdown" />
<ArtImg {D} name="bang" />
<ArtImg {D} name="crow" />
<ArtImg {D} name="beetle" />
<ArtImg {D} name="jellyfish" />
<ArtImg {D} name="somanyhands" />
<ArtImg {D} name="deepspider" />
<ArtImg {D} name="botfight" />
<ArtImg {D} name="tpdneoldman" />
<ArtImg {D} name="somerandomwoman" />
<ArtImg {D} name="woman" />
<ArtImg {D} name="synthwoman" />
<ArtImg {D} name="haringrun" />
<ArtImg {D} name="tvdude" />
<ArtImg {D} name="snowman" />
<ArtImg {D} name="lama" />
<ArtImg {D} name="cobra" />
<ArtImg {D} name="hand2" />
<ArtImg {D} name="cake" />
<ArtImg {D} name="weirdface" />
<ArtImg {D} name="freefall" />
