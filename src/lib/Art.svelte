<script>
  import { A, ArtGrid, CoverImg, Heading, Section } from './mixins'

  import { pushState } from '$app/navigation'


  let { top } = $props()

  const ON = x => e => {
    e.preventDefault()
    e.target.blur()
    pushState('', { selected: x })
  }
</script>

<Section name="WORK" nav="art" {top}>
  <div
    b="3xl:l gray-500"
    container="lg:"
    mx-auto
    p="x-5 b-16 md:x-8 lg:b-32"
    w-screen
  >
    <Heading data-aos="fade-in" mb="5 md:8" un-hidden="3xl:" un-text="center">
      <A href="/work" item un-text="stroked [&:hover,&:focus]:white">WORK</A>
    </Heading>
    <ArtGrid aos>
      {#snippet children(name, on)}
        <button
          aria-label="open project entry: {name}"
          bg-transparent
          cover
          disabled={!on}
          onclick={ON(name)}
          w-full
        >
          <CoverImg {name} alt="Open project entry: {name}." />
        </button>
      {/snippet}
    </ArtGrid>
  </div>
</Section>
