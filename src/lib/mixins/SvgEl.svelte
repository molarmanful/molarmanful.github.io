<svelte:options namespace="svg" />

<script>
  import { colors } from '../js/static'

  let { name, ...props } = $props()

  const b = 700
  const rt = (a = 3000, b = 1000) => 0 | (Math.random() * a + b)

  let c = $state('text-black')
  let t = $state(0)
  let len_a = $state(0)
  let len_o = $state(0)

  const getlen = node => {
    len_a = node.getTotalLength()
    len_o = node.getTotalLength()
  }

  let to
  const loop = () => {
    t = rt()
    c = colors[b][0 | (Math.random() * colors[b].length)]
    to = setTimeout(loop, t)
  }

  $effect(() => {
    to = setTimeout(() => {
      len_o = 0
      loop()
    }, 1000)

    return () => clearTimeout(to)
  })
</script>

<svelte:element
  this={name}
  style:transition="color, stroke-dashoffset ease-out"
  style:transition-duration="{t}ms"
  style:stroke-dasharray={len_a}
  style:stroke-dashoffset={len_o}
  class="{c} fill-transparent stroke-1 stroke-current"
  use:getlen
  {...props}
/>
