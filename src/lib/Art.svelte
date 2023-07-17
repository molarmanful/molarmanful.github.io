<script>
  import { onMount } from 'svelte'
  import { Section, CoverImg } from './mixins'

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
  <div w-full border="lg:l gray-500" p="x-5 b-16 lg:b-32" container="lg:~">
    <div grid="~ cols-1 sm:cols-2 md:cols-3 lg:cols-4" gap-8>
      {#each [...D.covers].sort(_ => 0.5 - Math.random()) as [name, _]}
        <div
          role="gridcell"
          tabindex="0"
          cursor-pointer
          outline-0
          on:click|preventDefault={ON(name)}
          on:keypress={_ => {}}
          data-aos="fade-up"
        >
          <CoverImg {name} {D} />
        </div>
      {/each}
    </div>
  </div>
</Section>
