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
  <meta
    name="description"
    content="Gallery of creative and technical works by Ben Pang, featuring projects in programming, design, multimedia art, and more."
  />
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
