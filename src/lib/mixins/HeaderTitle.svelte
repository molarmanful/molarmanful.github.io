<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'

  interface Props extends HTMLAttributes<HTMLHeadingElement> {
    mouse_rel: {
      x: number
      y: number
    }
  }

  const { mouse_rel, ...props }: Props = $props()

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
  <div class='absolute inset-0 screen p-8'>
    <svg
      style:--aber0='{aber_rel.x}px'
      style:--aber1='{aber_rel.y}px'
      style:--shad='{shad_rel}px'
      class='pointer-events-none m-auto full rotate-z--10 fill-transparent stroke-4 object-contain aber-drop lg:container lg:stroke-1 md:stroke-2'
      stroke='hsl(0, 100%, {(1 - dist) * 50 + 50}%)'
    >
      <title>BEN PANG</title>
      <use href='/benpang.svg#main' vector-effect='non-scaling-stroke'></use>
    </svg>
  </div>
</h1>
