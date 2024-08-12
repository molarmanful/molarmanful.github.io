<script>
  import { colors } from './js/static'
  import { clickout, sfactor } from './js/util.svelte'
  import { NavBody, NavIcon } from './mixins'

  let { tops = [] } = $props()

  let dropped = $state(false)
  const ON = e => {
    dropped = true
    e.target.blur()
  }
  const OFF = () => {
    dropped = false
  }
  const GOTO = top => {
    dropped = false
    scrollTo({ top })
  }

  let factor = $state(0)
  sfactor(x => (factor = x))

  const pulse = 2000
  const len = 4
  const clrs = $state([...Array(len)].map(() => 'text-gray-500'))
  const filter = $derived(
    `hue-rotate(${factor * -69}deg) grayscale(${factor * 1.2})`
  )
  let ic = 0
  let i = len - 1

  $effect(() => {
    const iv = setInterval(() => {
      if (i == len - 1) ic = (ic + 1) % colors[500].length
      clrs[i] = colors[500][ic]
      i = (i + 1) % len
    }, pulse / len)

    return () => clearInterval(iv)
  })

  let el = $state()
  clickout(() => el, OFF)
</script>

<svelte:window
  onkeydown={e => {
    if (e.key == 'Escape') OFF()
  }}
/>

<nav bind:this={el}>
  <NavIcon
    aria-expanded={dropped}
    {clrs}
    {filter}
    fixed=""
    flex=""
    {len}
    onclick={ON}
    onmouseenter={ON}
    {pulse}
    right="2"
    top="2"
    z="30"
  ></NavIcon>

  {#if dropped}
    <NavBody
      {GOTO}
      {clrs}
      {filter}
      fixed=""
      {len}
      onmouseleave={OFF}
      {pulse}
      right="2"
      top="2"
      {tops}
      z="40"
    />
  {/if}
</nav>
