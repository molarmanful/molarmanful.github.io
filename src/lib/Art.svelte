<script>
  import { onMount } from 'svelte'
  import { Section, ItemGrid, CoverImg } from './mixins'

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

  onMount(_ => {
    D.update()
  })
</script>

<Section name="WORK" id="art" ot={update}>
  <div
    w-screen
    border="xl:l gray-500"
    p="x-5 b-16 md:x-8 lg:b-32"
    mx-auto
    container="lg:"
  >
    <ItemGrid>
      {#each [...D.covers].sort(_ => 0.5 - Math.random()) as [name, _]}
        <button
          aria-label="open modal for {name}"
          cursor-pointer
          bg-transparent
          outline-none
          on:click|preventDefault={ON(name)}
          on:keypress={_ => {}}
          data-aos="fade-up"
        >
          <CoverImg {name} {D} />
        </button>
      {/each}
    </ItemGrid>
  </div>
</Section>
