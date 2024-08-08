<svelte:options namespace="svg" />

<script>
  import { colors } from '../js/static'

  let { name, ...props } = $props()

  const b = 700
  const rt = () => 0 | (Math.random() * 3000 + 1000)

  let c = $state('text-black')
  let t = $state(0)

  let to
  const loop = () => {
    t = rt()
    c = colors[b][0 | (Math.random() * colors[b].length)]
    to = setTimeout(loop, t)
  }

  $effect(() => {
    to = setTimeout(loop, rt())

    return () => clearTimeout(to)
  })
</script>

<svelte:element
  this={name}
  style:transition-duration="{t}ms"
  class="{c} fill-transparent stroke-1 stroke-current transition-color"
  {...props}
/>
