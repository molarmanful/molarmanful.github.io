<script>
  import me from '../js/me'
  import { redmote, sfactor } from '../js/util.svelte'

  import { SvgEl } from '.'

  let { ...props } = $props()

  let factor = $state(0)
  const rm = redmote()
  const fac_inv = $derived(Math.max(0, 1 - factor))
  const scale = $derived(rm.matches || 1 + 0.1 * fac_inv)
  sfactor(x => (factor = x))

  let innerWidth = $state(0)
  let innerHeight = $state(0)
  const mouse = $state({ x: 0, y: 0 })
  const mouse_rel = $derived({
    x: +rm.matches || (1 - (6 * mouse.x) / innerWidth) * fac_inv,
    y: +rm.matches || (1 - (6 * mouse.y) / innerHeight) * fac_inv,
  })

  $effect(() => {
    mouse.x = innerWidth / 2
    mouse.y = innerHeight / 2
  })
</script>

<svelte:window
  ondeviceorientation={({ beta, gamma }) => {
    mouse.x = (gamma * innerWidth) / 180
    mouse.y = (beta * innerHeight) / 180
  }}
  onmousemove={({ clientX, clientY }) => {
    mouse.x = clientX
    mouse.y = clientY
  }}
  bind:innerWidth
  bind:innerHeight
/>

<svg
  style:--un-scale-x={scale}
  style:--un-scale-y={scale}
  style:--t-x="{mouse_rel.x}%"
  style:--un-translate-y="{mouse_rel.y}%"
  viewBox="0 0 1587 1080"
  {...props}
>
  {#each me as el}
    <SvgEl name={el.this} len={el.len} {...el.attr} />
  {/each}
</svg>
