<script lang='ts'>
  import type { PageServerData } from './$types'

  import { cD } from '$lib/js/contexts'
  import type { Item } from '$lib/js/D'

  interface Props {
    data: PageServerData
  }

  const { data }: Props = $props()
  const { D } = cD.get()

  const name: string = data.name

  const { default: It, desc } = $derived(D.items.get(name) as Item)
</script>

<svelte:head>
  <title>{name} | {D.title}</title>
  {#if desc}
    <meta name='description' content={desc} />
  {/if}
</svelte:head>

<It />
