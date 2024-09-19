<script lang='ts'>
  import type { Item } from '$lib/js/D'

  import { cD } from '$lib/js/contexts'

  import type { PageServerData } from './$types'

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
