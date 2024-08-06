<script>
  let { data } = $props()

  const { name, module } = data
  let desc = $state('')
</script>

<svelte:head>
  <title>{name} | Ben Pang</title>
  {#if desc}
    <meta name="description" content={desc} />
  {/if}
</svelte:head>

<svelte:component this={module} bind:desc />
