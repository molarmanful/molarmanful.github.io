<svelte:options namespace='svg' />

<script lang='ts'>
  import { cD } from '$lib/js/contexts'
  import type { El } from '$lib/js/me'
  import { colors } from '$lib/js/static'

  interface Props {
    len: El['len']
    name?: El['this']
  }

  const { len, name, ...props }: Props = $props()
  const { loaded } = cD.get()

  const cs = colors[500]
  const rt = (a = 3000, b = 1000) => 0 | (Math.random() * a + b)

  let c = $state('text-black')
  let t = $state(0)
  let len_o = $state(0)

  let to: ReturnType<typeof setTimeout> | undefined
  const loop = () => {
    t = rt()
    c = cs[0 | (Math.random() * cs.length)]
    to = setTimeout(loop, t)
  }

  $effect(() => {
    if (!loaded.x)
      return

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
  style:transition='color, stroke-dashoffset ease-out'
  style:transition-duration='{t}ms'
  style:stroke-dasharray={len}
  style:stroke-dashoffset={len_o}
  class='{c} fill-transparent stroke-1 stroke-current'
  {...props}
/>
