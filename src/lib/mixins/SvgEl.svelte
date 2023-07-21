<svelte:options namespace="svg" />

<script>
  export let name
  export let colors
  let stroke
  let t = 3000

  let f = _ => {
    stroke = colors[0 | (Math.random() * colors.length)]
    t = (0 | (Math.random() * 300 + 100)) * 10
    setTimeout(f, t)
  }

  f()
</script>

<svelte:element
  this={name}
  {...$$restProps}
  class="fill-transparent transition-stroke stroke-1 {stroke}"
  style:transition-duration="{t}ms"
/>
