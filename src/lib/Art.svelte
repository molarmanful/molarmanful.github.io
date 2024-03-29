<script>
  import { fadeonly } from './js/util'
  import { ArtGrid, CoverImg, Heading, Section } from './mixins'

  export let selected
  export let top = { name: 'art' }

  const ON = x => e => {
    e.target.blur()
    selected = x
  }

  let ot
  $: {
    top.n = ot
    top = top
  }

  let fo = fadeonly()
</script>

<Section id="art" name="WORK" bind:ot>
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
    <ArtGrid let:n={name}>
      <div data-aos="fade-{$fo ? 'in' : 'up'}" flex>
        <button
          aria-label="open entry: {name}"
          bg-transparent
          cover
          w-full
          on:click|preventDefault={ON(name)}
          on:keypress={() => {}}
        >
          <CoverImg {name} />
        </button>
      </div>
    </ArtGrid>
  </div>
</Section>
