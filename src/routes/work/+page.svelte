<script>
  import { A, ArtGrid, CoverImg, Heading } from '$lib/mixins'
</script>

<svelte:head>
  <title>work | Ben Pang</title>
</svelte:head>

<div container="lg:" m-auto p="x-5 y-5 lg:y-16" w-full>
  <Heading align="center" mb="5 md:8">WORK</Heading>
  <ArtGrid>
    {#snippet children(name)}
      <A cover="" href="/work/{name}" t tabindex="0">
        <CoverImg {name} />
      </A>
    {/snippet}
  </ArtGrid>
</div>
