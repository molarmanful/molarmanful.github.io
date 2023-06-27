<script>
  import { onMount } from 'svelte'
  import { Section } from './mixins'

  export let selected
  let ON = x => (selected = x)
  export let D

  onMount(_ => {
    D.lazy.update()
  })
</script>

<Section name="WORK" id="art">
  <div w-full border="lg:l gray-500" px-5 class="lg:container">
    <div grid="~ cols-1 sm:cols-2 md:cols-3 lg:cols-4" gap-8>
      {#each D.covers as [name, cover]}
        <div
          role="gridcell"
          tabindex="0"
          cursor-pointer
          outline-0
          on:click|preventDefault={ON(name)}
          on:keypress={ON(name)}
          data-aos="fade-up"
        >
          <img
            w-full
            border="1 black hover:white"
            transition
            class="lazy graiscale"
            draggable="false"
            alt={name}
            src={D.tiny.get(name)}
            data-src={cover}
          />
        </div>
      {/each}
    </div>
    <div mb="16 lg:32" />
  </div>
</Section>
