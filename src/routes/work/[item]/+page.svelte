<script>
  export let data

  const { name, module } = data
  let desc
</script>

<svelte:head>
  <title>{name} | Ben Pang</title>
  <meta name="description" content={desc} />
</svelte:head>

<svelte:component this={module} bind:desc />
