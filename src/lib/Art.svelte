<script>
  import { Section, ArtGrid, CoverImg } from './mixins'

  export let selected
  export let D
  export let top = { name: 'art' }

  let ON = x => {
    selected = x
  }

  let update = n => {
    top.n = n
    top = top
  }
</script>

<Section name="WORK" id="art" ot={update}>
  <div
    w-screen
    border="xl:l gray-500"
    p="x-5 b-16 md:x-8 lg:b-32"
    mx-auto
    container="lg:"
  >
    <ArtGrid>
      {#each D.covers as [name, _]}
        <button
          aria-label="open modal for {name}"
          cursor-pointer
          bg-transparent
          outline-none
          on:click|preventDefault={ON(name)}
          on:keypress={_ => {}}
          data-aos="fade-up"
        >
          <CoverImg {D} {name} />
        </button>
      {/each}
    </ArtGrid>
  </div>
</Section>
