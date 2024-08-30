<script lang='ts'>
  import { A, ArtGrid, CoverImg, Heading, Section } from './mixins'

  import { pushState } from '$app/navigation'

  interface Props {
    top: (a: string) => void
  }

  const { top }: Props = $props()

  const ON = (x: string) => (e: Event) => {
    e.preventDefault()
    ;(e.target as HTMLElement).blur()
    pushState('', { selected: x })
  }
</script>

<Section name='WORK' nav='art' {top}>
  <div class='mx-auto w-screen b-bord px-5 pb-16 lg:(container pb-32) 3xl:b-l md:px-8 xl:px-16'>
    <Heading clazz='mb-5 text-center md:mb-8 3xl:hidden' data-aos='fade-in'>
      <A
        clazz='decoration-transparent text-(stroked head!) [&:hover,&:focus]:text-white! focus:decoration-current!'
        href='/work'
        item
      >WORK</A>
    </Heading>
    <ArtGrid aosS='up'>
      {#snippet children(name, on, i)}
        <button
          class='w-full bg-transparent cover'
          aria-label='open project entry: {name}'
          disabled={!on}
          onclick={ON(name)}
        >
          <CoverImg {name} alt='Open project entry: {name}.' {i} />
        </button>
      {/snippet}
    </ArtGrid>
  </div>
</Section>
