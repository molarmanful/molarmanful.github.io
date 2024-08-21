<script>
  import { colors } from './js/static'
  import { sfactor } from './js/util.svelte'
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
  const GOTO = top => () => {
    dropped = false
    scrollTo({ top: document.getElementById(top).offsetTop })
  }

  let factor = $state(0)
  // const filter = $derived(
  //   `hue-rotate(${factor * -69}deg) grayscale(${factor * 1.2})`
  // )
  sfactor(x => (factor = x))

  let col = $state('text-bord')
  const pulse = $derived(factor > 0.8 ? 400 : 2000)
  const color = $derived(factor > 0.8 ? 'text-bord' : col)

  $effect(() => {
    let ic = 0
    const iv = setInterval(() => {
      col = colors[500][ic]
      ic = (ic + 1) % colors[500].length
    }, pulse)

    return () => clearInterval(iv)
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
