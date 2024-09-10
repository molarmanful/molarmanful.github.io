<svelte:options namespace='svg' />

<script lang='ts'>
  import { cD } from '$lib/js/contexts'
  import type { El } from '$lib/js/me'
  import { colors } from '$lib/js/static'

  interface Props {
    el: El
  }

  const { el, ...rest }: Props = $props()
  const { loaded } = cD.get()

  const cs = colors[500]
  const rt = (a = 3000, b = 1000) => 0 | (Math.random() * a + b)

  let c = $state('text-black')
  let t = $state(0)
  let len = $state(el.len)

  let to: ReturnType<typeof setTimeout> | undefined
  const loop = () => {
    t = rt()
    c = cs[0 | (Math.random() * cs.length)]
    to = setTimeout(loop, t)
  }

  $effect(() => {
    if (!loaded.x)
      return

    to = setTimeout(() => {
      len = 0
      loop()
    }, 1000)

    return () => clearTimeout(to)
  })
</script>

<svelte:element
  this={el.this}
  style:transition='color, stroke-dashoffset ease-out'
  style:transition-duration='{t}ms'
  style:stroke-dasharray={el.len}
  style:stroke-dashoffset={len}
  class='{c} fill-transparent stroke-1 stroke-current'
  {...el.attr}
  {...rest}
/>
