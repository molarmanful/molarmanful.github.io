<script>
  export let factor = 0

  let scrollY
  let innerHeight

  $: factor = Math.max(0, scrollY / innerHeight)
</script>

<svelte:window bind:scrollY bind:innerHeight />
