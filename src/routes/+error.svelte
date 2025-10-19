<script lang='ts'>
  import { page } from '$app/state'
</script>

<svelte:head>
  <title>ERR: {page.status}</title>
</svelte:head>

<div class='absolute inset-0 flex items-center justify-center'>
  <h1 class='text-[50vmin] text-accent-400'>{page.status}</h1>
</div>
