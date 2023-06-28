<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, ArtImg, MediaImg } from '../mixins'

  export let D

  onMount(_ => {
    D.lazy.update()
  })
</script>

<Prose>
  <Heading>THE PHYSICAL COLLECTION</Heading>
  <Subheading>
    Sculptures and installations which follow arbitrary rules and fulfill
    arbitrary purposes.
  </Subheading>
</Prose>

<ArtImg {D} name="wireball" />
<ArtImg {D} name="pangolin" />
<MediaImg {D} name="pangolin_stare" />
