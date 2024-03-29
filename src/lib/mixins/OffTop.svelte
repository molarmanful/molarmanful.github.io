<script>
  import { createResizeObserver } from '@grail-ui/svelte'

  export let ot = 0
  const { useResizeObserver, entries } = createResizeObserver()

  $: ot = $entries[0]?.target.offsetTop
</script>

<slot {useResizeObserver} />
