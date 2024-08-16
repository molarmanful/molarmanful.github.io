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
  const GOTO = top => () => {
    dropped = false
    scrollTo({ top: document.getElementById(top).offsetTop })
  }

  let factor = $state(0)
  const filter = $derived(
    `hue-rotate(${factor * -69}deg) grayscale(${factor * 1.2})`
  )
  sfactor(x => (factor = x))

  const pulse = 2000
  let color = $state('text-gray-500')

  $effect(() => {
    let ic = 0
    const iv = setInterval(() => {
      color = colors[500][ic]
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

<nav use:clickout={{ f: OFF }}>
  <NavIcon
    aria-expanded={dropped}
    {color}
    {filter}
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
    <NavBody
      {GOTO}
      {color}
      {filter}
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
