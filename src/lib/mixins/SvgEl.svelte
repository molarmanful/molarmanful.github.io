<svelte:options namespace="svg" />

<script>
  import { colors } from '../js/static'

  let { name, ...props } = $props()

  let c = $state('text-gray-900')
  let t = $state(0)

  const b = 700
  const d = 0
  const rc = x => 0 | (Math.random() * x.length)
  const rt = () => 0 | (Math.random() * 3000 + 1000)

  let to
  const loop = () => {
    t = rt()
    c = colors[b][rc(colors[b])]
    to = setTimeout(loop, t)
  }

  $effect(() => {
    to = setTimeout(loop, d)

    return () => clearTimeout(to)
  })
</script>

<svelte:element
  this={name}
  style:transition-duration="{t}ms"
  class="{c} fill-transparent stroke-1 stroke-current transition-color"
  {...props}
/>
