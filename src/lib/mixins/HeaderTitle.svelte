<script>
  let { mouse_rel, ...props } = $props()

  let aber = $state(4)

  const aber_rel = $derived({
    x: -Math.min(0.5, Math.max(-0.5, mouse_rel.x)) * 2 * aber,
    y: -Math.min(0.5, Math.max(-0.5, mouse_rel.y)) * 2 * aber,
  })

  const dist = $derived(Math.min(1, Math.hypot(mouse_rel.x, mouse_rel.y) * 2))

  // let aber = $state([])
  // let cd0 = 0
  // let cd1 = 0
  //
  // $effect(() => {
  //   const i = setInterval(() => {
  //     if (cd0) {
  //       aber = aber.map(() => Math.random() * 6 - 3)
  //       cd0--
  //       return
  //     }
  //     if (cd1) {
  //       aber = Array(6).fill(0)
  //       cd1--
  //       return
  //     }
  //     cd0 = 0 | (Math.random() * 10)
  //     cd1 = 0 | (Math.random() * 20)
  //   }, 50)
  //
  //   return () => clearInterval(i)
  // })
</script>

<h1 {...props}>
  <div absolute inset-0 p-8 screen>
    <svg
      style:--aber0="{aber_rel.x}px"
      style:--aber1="{aber_rel.y}px"
      style:--aber2="{aber_rel.x}px"
      style:--aber3="{aber_rel.y}px"
      style:--aber4="{aber_rel.x}px"
      style:--aber5="{aber_rel.y}px"
      aber-drop
      alt="BEN PANG"
      container="lg:"
      fill-transparent
      full
      m-auto
      object-contain
      rotate-z--10
      stroke="hsl(0, 100%, {(1 - dist) * 50 + 50}%)"
      stroke-1
    >
      <use href="/benpang.svg#main"></use>
    </svg>
  </div>
</h1>
