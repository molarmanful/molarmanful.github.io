<script>
  import { getContext } from 'svelte'

  import { fadeonly } from './js/util.svelte'
  import { ArtGrid, CoverImg, Heading, Section } from './mixins'

  let { top } = $props()
  const selected = getContext('selected')

  const ON = x => e => {
    e.preventDefault()
    e.target.blur()
    selected.x = x
  }

  let fo = fadeonly()
</script>

<Section name="WORK" nav="art" {top}>
  <div
    border="3xl:l gray-500"
    container="lg:"
    mx-auto
    p="x-5 b-16 md:x-8 lg:b-32"
    w-screen
  >
    <Heading data-aos="fade-in" mb="5 md:8" un-hidden="3xl:" un-text="center">
      WORK
    </Heading>
    <ArtGrid>
      {#snippet children(name)}
        <div data-aos="fade-{fo.matches ? 'in' : 'up'}" flex>
          <button
            aria-label="open entry: {name}"
            bg-transparent
            cover
            onclick={ON(name)}
            w-full
          >
            <CoverImg {name} />
          </button>
        </div>
      {/snippet}
    </ArtGrid>
  </div>
</Section>
