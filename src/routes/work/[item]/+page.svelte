<script>
  import { getContext } from 'svelte'

  let { data } = $props()
  const D = getContext('D')

  const { name } = data

  let desc = $state('')
</script>

<svelte:head>
  <title>{name} | Ben Pang</title>
  {#if desc}
    <meta name="description" content={desc} />
  {/if}
</svelte:head>

<svelte:component this={D.items.get(name).default} bind:desc />
