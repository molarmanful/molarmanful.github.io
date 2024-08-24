<script>
  import { getContext } from 'svelte'

  import { afterNavigate } from '$app/navigation'
  import { A, ArtGrid, CoverImg, Heading } from '$lib/mixins'

  const { D, aos } = getContext('D')

  afterNavigate(() => {
    aos.init()
  })
</script>

<svelte:head>
  <title>work | {D.title}</title>
</svelte:head>

<div container="lg:" m-auto p="x-5 y-5 lg:y-16" w-full>
  <Heading align="center" mb="5 md:8">WORK</Heading>
  <ArtGrid aos="in">
    {#snippet children(name, on, i)}
      <A
        aria-disabled={!on}
        cover=""
        href={on ? `/work/${name}` : void 0}
        role="link"
        t
        tabindex={on ? 0 : void 0}
      >
        <CoverImg {name} alt="Open project entry: {name}." {i} />
      </A>
    {/snippet}
  </ArtGrid>
</div>
