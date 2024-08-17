<script>
  import { getContext } from 'svelte'

  let { ...props } = $props()
  const loaded = getContext('loaded')

  let aber = $state(0.1)
  let ready = $state(false)

  $effect(() => {
    if (!loaded.x) return

    const t = setTimeout(() => {
      ready = true
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
      class="transition-filter,stroke-1000"
      aber-drop
      alt="BEN PANG"
      container="lg:"
      fill-transparent
      full
      m-auto
      object-contain
      rotate-z--10
      stroke={ready ? '#f00' : '#fff'}
      stroke-1
    >
      <use href="/benpang.svg#main"></use>
    </svg>
  </div>
</h1>
