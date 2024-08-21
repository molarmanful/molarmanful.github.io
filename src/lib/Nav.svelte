<script>
  import { getContext } from 'svelte'

  import { hexes } from './js/static'
  import { NavBody, NavIcon } from './mixins'

  const { tops = [] } = $props()
  const factor = getContext('factor')

  let dropped = $state(false)
  const ON = e => {
    dropped = true
    e.target.blur()
  }
  const OFF = () => {
    dropped = false
  }
  const GOTO = top => () => {
    dropped = false
    scrollTo({ top: document.getElementById(top).offsetTop })
  }

  // const filter = $derived(
  //   `hue-rotate(${factor.x * -69}deg) grayscale(${factor.x * 1.2})`
  // )

  let col = $state('#818cf8')
  const pls = $state(2000)
  const pulse = $derived(factor.x > 0.5 ? 0 : pls)
  const color = $derived(
    `color-mix(in oklab, #818cf8 ${Math.max(0, Math.min(1, factor.x * 2 - 1)) * 100}%, ${col})`
  )

  $effect(() => {
    let ic = 0
    const t = setInterval(() => {
      col = hexes[500][ic]
      ic = (ic + 1) % hexes[500].length
    }, pls)

    return () => clearInterval(t)
  })
</script>

<svelte:window
  onkeydown={e => {
    if (e.key == 'Escape') OFF()
  }}
/>

<nav>
  <NavIcon
    aria-expanded={dropped}
    {color}
    fixed=""
    flex=""
    onclick={ON}
    onmouseenter={ON}
    {pulse}
    right="2"
    top="2"
    z="30"
  ></NavIcon>

  {#if dropped}
    <button
      cursor-initial
      fixed
      onmousedown={OFF}
      ontouchstart={OFF}
      opacity-0
      screen
      tabindex="-1"
      z-30
    >
      Close Navigation
    </button>
    <NavBody
      {GOTO}
      {color}
      fixed=""
      onmouseleave={OFF}
      {pulse}
      right="2"
      top="2"
      {tops}
      z="40"
    />
  {/if}
</nav>
