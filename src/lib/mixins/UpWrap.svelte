<script>
  import { afterUpdate, getContext } from 'svelte'

  let D = getContext('D')

  export let item

  afterUpdate(() => {
    D.update()
  })
</script>

<svelte:component this={item} />
