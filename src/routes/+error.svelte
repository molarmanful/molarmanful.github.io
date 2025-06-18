<script lang='ts'>
  import { page } from '$app/state'
</script>

<svelte:head>
  <title>ERR: {page.status}</title>
</svelte:head>

<div class='flex items-center inset-0 justify-center absolute'>
  <h1 class='text-[50vmin] text-accent'>{page.status}</h1>
</div>
