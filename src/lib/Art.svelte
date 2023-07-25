<script>
  import { getContext } from 'svelte'

  import { Section, ArtGrid, CoverImg } from './mixins'

  let D = getContext('D')

  export let selected
  export let top = { name: 'art' }

  let ON = x => () => {
    selected = x
  }

  let update = n => {
    top.n = n
    top = top
  }
</script>

<Section id="art" name="WORK" ot={update}>
  <div
    border="xl:l gray-500"
    container="lg:"
    mx-auto
    p="x-5 b-16 md:x-8 lg:b-32"
    w-screen
  >
    <ArtGrid>
      {#each D.covers as [name]}
        <button
          aria-label="open modal for {name}"
          bg-transparent
          cursor-pointer
          data-aos="fade-up"
          outline-none
          on:click|preventDefault={ON(name)}
          on:keypress={() => {}}
        >
          <CoverImg {name} />
        </button>
      {/each}
    </ArtGrid>
  </div>
</Section>
