<script>
  import { getContext } from 'svelte'

  import { ArtGrid, A, CoverImg } from '$lib/mixins'

  let D = getContext('D')
</script>

<svelte:head>
  <title>items | Ben Pang</title>
</svelte:head>

<div container="lg:~" m-auto p="x-5 y-5 lg:y-16" w-full>
  <ArtGrid>
    {#each D.covers as [name]}
      <A href="/items/{name}" t><CoverImg {name} /></A>
    {/each}
  </ArtGrid>
</div>
