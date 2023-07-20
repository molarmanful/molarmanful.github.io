<svelte:options namespace="svg" />

<script>
  export let name
  export let colors
  let stroke
  let t = 3000

  let f = _ => {
    t = (0 | (Math.random() * 3 + 1)) * 1000
    setTimeout(f, t)
    stroke = colors[0 | (Math.random() * colors.length)]
  }

  f()
</script>

<svelte:element
  this={name}
  {...$$restProps}
  class="fill-transparent transition-stroke stroke-1 {stroke}"
  style:transition-duration="{t}ms"
/>
