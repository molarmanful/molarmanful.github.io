<script>
  let { ...props } = $props()

  let aber = $state(0.1)
  let loaded = $state(false)

  $effect(() => {
    const t = setTimeout(() => {
      loaded = true
      aber = 4
    }, 1000)

    return () => clearTimeout(t)
  })

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
      style:--aber0="{-aber}px"
      style:--aber1="{aber}px"
      style:--aber2="{-aber}px"
      style:--aber3="{aber}px"
      style:--aber4="{-aber}px"
      style:--aber5="{aber}px"
      aber-drop=""
      alt="BEN PANG"
      container="lg:"
      fill-black
      fill-opacity-1
      full
      m-auto
      object-contain
      rotate--10
      stroke={loaded ? '#f00' : '#fff'}
      transition="property-drop-shadow,stroke-color duration-1000"
    >
      <use href="/benpang.svg#main"></use>
    </svg>
  </div>
</h1>
