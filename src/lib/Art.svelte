<script>
  import { A, ArtGrid, CoverImg, Heading, Section } from './mixins'

  import { pushState } from '$app/navigation'

  const { top } = $props()

  const ON = x => e => {
    e.preventDefault()
    e.target.blur()
    pushState('', { selected: x })
  }
</script>

<Section name="WORK" nav="art" {top}>
  <div
    b="3xl:l bord"
    container="lg:"
    mx-auto
    p="x-5 b-16 md:x-8 lg:b-32 xl:x-16"
    w-screen
  >
    <Heading data-aos="fade-in" mb="5 md:8" un-hidden="3xl:" un-text="center">
      <A href="/work" item un-text="stroked head! hover:white!">WORK</A>
    </Heading>
    <ArtGrid aos>
      {#snippet children(name, on, i)}
        <button
          aria-label="open project entry: {name}"
          bg-transparent
          cover
          disabled={!on}
          onclick={ON(name)}
          w-full
        >
          <CoverImg {name} alt="Open project entry: {name}." {i} />
        </button>
      {/snippet}
    </ArtGrid>
  </div>
</Section>
