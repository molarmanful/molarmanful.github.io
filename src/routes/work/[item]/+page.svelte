<script lang='ts'>
  import { title } from '#lib/ts/meta.ts'

  import type { PageData } from './$types'

  const { data }: {
    data: PageData
  } = $props()

  const { title: itemTitle, component: It, desc } = $derived(data)
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
