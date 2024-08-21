<script>
  const { mouse_rel, ...props } = $props()

  const aber = 4
  const shad = 4

  const aber_rel = $derived({
    x: -Math.min(0.5, Math.max(-0.5, mouse_rel.x)) * 2 * aber,
    y: -Math.min(0.5, Math.max(-0.5, mouse_rel.y)) * 2 * aber,
  })

  const dist = $derived(Math.min(1, Math.hypot(mouse_rel.x, mouse_rel.y) * 2))
  const shad_rel = $derived(Math.max(0, (1 - dist) * shad))
</script>

<h1 {...props}>
  <div absolute inset-0 p-8 screen>
    <svg
      style:--aber0="{aber_rel.x}px"
      style:--aber1="{aber_rel.y}px"
      style:--shad="{shad_rel}px"
      aber-drop
      alt="BEN PANG"
      container="lg:"
      fill-transparent
      full
      m-auto
      object-contain
      rotate-z--10
      stroke="hsl(0, 100%, {(1 - dist) * 50 + 50}%)"
      un-stroke="4 md:2 lg:1"
    >
      <use href="/benpang.svg#main" vector-effect="non-scaling-stroke"></use>
    </svg>
  </div>
</h1>
