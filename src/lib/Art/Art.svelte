<script lang='ts'>
  import { pushState } from '$app/navigation'
  import { A, CoverImg, Heading, ItemsGrid, Section } from '$lib/components'

  const ON = (x: string) => (e: Event) => {
    e.preventDefault()
    ;(e.target as HTMLElement).blur()
    pushState('', { selected: x })
  }
</script>

<Section name='WORK' nav='art'>
  <div class='mx-auto w-screen b-bord px-5 pb-16 pt-6 lg:(container pb-32) 3xl:b-l md:px-8 xl:px-16'>
    <Heading aoso={{}} clazz='mb-5 text-center md:mb-8 3xl:hidden'>
      <A
        clazz='decoration-transparent text-(stroked head!) [&:hover,&:focus]:text-white! focus:decoration-current!'
        data-sveltekit-reload
        href='/work'
        item
        t
      >WORK</A>
    </Heading>
    <ItemsGrid aosS='up'>
      {#snippet children(name, on, i)}
        <button
          class='w-full bg-transparent cover'
          aria-label='open project entry: {name}'
          disabled={!on}
          onclick={ON(name)}
        >
          <CoverImg {name} alt='Cover image for project entry: {name}.' {i} />
        </button>
      {/snippet}
    </ItemsGrid>
  </div>
</Section>
