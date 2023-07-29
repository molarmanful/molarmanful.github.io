<script>
  import { getContext } from 'svelte'

  let D = getContext('D')
</script>

<div
  gap="5 md:8"
  grid="~ cols-1 sm:cols-2 md:cols-3 xl:cols-4"
  {...$$restProps}
>
  {#each D.covers as [name]}
    <slot n={name} />
  {/each}
</div>
