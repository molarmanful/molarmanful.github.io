<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    mouse: Mouse
    cursorFs: {
      on: (e: MouseEvent) => void
      off: () => void
    }
  }

  const { mouse, cursorFs, ...rest }: Props = $props()

  interface Freeze {
    px: number
    py: number
    col?: string
    on: boolean
  }

  let on = $state(false)
  let on_a = $state(false)
  let t_on_a: ReturnType<typeof setTimeout> | undefined = $state()
  let height = $state('2rem')
  let width = $state('2rem')
  const freeze: Freeze = $state({ px: 0, py: 0, on: false })
  const pos = $derived(freeze.on ? freeze : mouse)

  cursorFs.on = (e) => {
    const target = e.target as HTMLElement
    const { height: h, width: w, top, left } = target.getBoundingClientRect()
    height = `${h}px`
    width = `${w}px`
    freeze.px = left + w / 2
    freeze.py = top + h / 2
    freeze.col = target.dataset.col
    freeze.on = true
  }

  cursorFs.off = () => {
    height = '2rem'
    width = '2rem'
    freeze.col = void 0
    freeze.on = false
  }

  $effect(() => {
    if (!mouse.on) {
      on = false
      return
    }
    setTimeout(() => (on = true))
  })

  $effect(() => {
    if (freeze.on && !on_a) {
      clearTimeout(t_on_a)
      on_a = true
      return
    }
    t_on_a = setTimeout(() => (on_a = false), 200)
  })
</script>

<div
  style:transform='translate({pos.px}px, {pos.py}px)'
  style:transition='transform {+on * (on_a ? 200 : 100)}ms, opacity 400ms'
  style:opacity={on ? 1 : 0}
  class="{freeze.on ? 'mix-blend-difference' : ''} bg-transparent fixed left-0 pointer-events-none top-0"
  {...rest}
>
  <div
    style:height
    style:width
    style:transition='height 200ms, width 200ms, color 200ms'
    class="{freeze.col || 'text-bord'} b-(1 current) translate-(x--1/2 y--1/2)"
  ></div>
</div>
