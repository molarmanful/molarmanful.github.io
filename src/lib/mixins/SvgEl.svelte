<svelte:options namespace="svg" />

<script>
  import { getContext } from 'svelte'

  import { colors } from '../js/static'

  let { len, name, ...props } = $props()
  const loaded = getContext('loaded')

  const b = 700
  const rt = (a = 3000, b = 1000) => 0 | (Math.random() * a + b)

  let c = $state('text-black')
  let t = $state(0)
  let len_o = $state(0)
  let el = $state()

  let to
  const loop = () => {
    t = rt()
    c = colors[b][0 | (Math.random() * colors[b].length)]
    to = setTimeout(loop, t)
  }

  $effect(() => {
    if (!loaded.x) return

    len_o = len

    to = setTimeout(() => {
      len_o = 0
      loop()
    }, 1000)

    return () => clearTimeout(to)
  })
</script>

<svelte:element
  this={name}
  bind:this={el}
  style:transition="color, stroke-dashoffset ease-out"
  style:transition-duration="{t}ms"
  style:stroke-dasharray={len}
  style:stroke-dashoffset={len_o}
  class="{c} fill-transparent stroke-1 stroke-current"
  {...props}
/>
