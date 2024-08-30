<script lang='ts'>
  import { afterNavigate } from '$app/navigation'
  import { cD } from '$lib/js/contexts'
  import { A, ArtGrid, CoverImg, Heading } from '$lib/mixins'

  const { D, aos } = cD.get()

  afterNavigate(() => {
    aos.init()
  })
</script>

<svelte:head>
  <title>work | {D.title}</title>
  <meta
    name='description'
    content='Gallery of creative and technical works by Ben Pang, featuring projects in programming, design, multimedia art, and more.'
  />
</svelte:head>

<div class='m-auto w-full p-5 lg:container lg:py-16'>
  <Heading align='center' mb='5 md:8'>WORK</Heading>
  <ArtGrid aos='in'>
    {#snippet children(name, on, i)}
      <A
        class='cover'
        aria-disabled={!on}
        href={on ? `/work/${name}` : void 0}
        role='link'
        t
        tabindex={on ? 0 : void 0}
      >
        <CoverImg {name} alt='Open project entry: {name}.' {i} />
      </A>
    {/snippet}
  </ArtGrid>
</div>
