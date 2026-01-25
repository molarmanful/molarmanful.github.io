<script lang='ts'>
  import { items, title } from '$lib/ts/meta'

  import type { PageServerData } from './$types'

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

<div
  class='
    flex flex-col items-center gap-5 py-8
    xl:gap-8 xl:py-13
  '
>
  <It />
</div>
