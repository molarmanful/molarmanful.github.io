<svelte:options namespace="svg" />

<script>
  import { RColor } from '.'

  export let name
</script>

<RColor let:c let:t>
  <svelte:element
    this={name}
    {...$$restProps}
    style:transition-duration="{t}ms"
    class="fill-transparent transition-color stroke-1 stroke-current {c}"
  />
</RColor>
