<script lang='ts'>
  import type { PageServerData } from './$types'

  import { items, title } from '$lib/ts/meta'

  interface Props {
    data: PageServerData
  }

  const { data }: Props = $props()

  const {
    title: itemTitle,
    default: It,
    desc,
  } = $derived(items[data.name])
</script>

<svelte:head>
  <title>{itemTitle} | {title}</title>
  {#if desc}
    <meta name='description' content={desc} />
  {/if}
</svelte:head>

<div class='py-8 flex flex-col gap-5 items-center xl:(py-13 gap-8)'>
  <It />
</div>
