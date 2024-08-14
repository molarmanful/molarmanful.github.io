<script>
  import { getContext } from 'svelte'

  let { data } = $props()
  const D = getContext('D')

  const { name } = data

  const { default: Item, desc } = $derived(D.items.get(name))
</script>

<svelte:head>
  <title>{name} | {D.title}</title>
  {#if desc}
    <meta name="description" content={desc} />
  {/if}
</svelte:head>

<Item />
