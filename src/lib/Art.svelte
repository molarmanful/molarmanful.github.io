<script>
  import { onMount } from 'svelte'
  import { Section, Image } from './mixins'

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
  <div w-full border="lg:l gray-500" px-5 container="lg:~">
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
          <Image
            border="1 black hover:white"
            mb="0"
            transition=""
            graiscale
            draggable="false"
            {name}
            a={D.covers_tiny}
            b={D.covers}
          />
        </div>
      {/each}
    </div>
    <div mb="16 lg:32" />
  </div>
</Section>
