<script>
  import ben from '$lib/media/benpang.svg'

  let aber = Array(6).fill(0)
  let cd0 = 0
  let cd1 = 0

  setInterval(() => {
    if (cd0) {
      aber = aber.map(() => Math.random() * 6 - 3)
      cd0--
      return
    }
    if (cd1) {
      aber = Array(6).fill(0)
      cd1--
      return
    }
    cd0 = 0 | (Math.random() * 10)
    cd1 = 0 | (Math.random() * 20)
  }, 50)
</script>

<h1
  style:--aber0="{aber[0]}px"
  style:--aber1="{aber[1]}px"
  style:--aber2="{aber[2]}px"
  style:--aber3="{aber[3]}px"
  style:--aber4="{aber[4]}px"
  style:--aber5="{aber[5]}px"
  aber-drop
  {...$$restProps}
>
  <div absolute inset-0 p-8 screen>
    <svg
      alt="BEN PANG"
      container="lg:"
      fill-slate-500
      full
      m-auto
      object-contain
      rotate--10
    >
      <use href="{ben}#main"></use>
    </svg>
  </div>
</h1>
