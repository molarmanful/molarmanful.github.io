<script lang='ts'>
  import { cD } from './js/contexts'
  import { hexes } from './js/static'
  import { NavBody, NavIcon } from './mixins'

  interface Props {
    tops: string[]
  }

  const { tops = [] }: Props = $props()
  const { factor } = cD.get()

  let dropped = $state(false)
  const ON = ({ target }: Event) => {
    dropped = true
    ;(target as HTMLElement).blur()
  }
  const OFF = () => {
    dropped = false
  }
  const GOTO = (top: string) => () => {
    dropped = false
    scrollTo({ top: document.getElementById(top)?.offsetTop })
  }

  // const filter = $derived(
  //   `hue-rotate(${factor.x * -69}deg) grayscale(${factor.x * 1.2})`
  // )

  let col = $state('#818cf8')
  const pls = $state(2000)
  const pulse = $derived(factor.x > 0.5 ? 0 : pls)
  const color = $derived(
    `color-mix(in oklab, #818cf8 ${Math.max(0, Math.min(1, factor.x * 2 - 1)) * 100}%, ${col})`,
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
  onkeydown={(e) => {
    if (e.key === 'Escape')
      OFF()
  }}
/>

<nav>
  <NavIcon
    aria-expanded={dropped}
    clazz='fixed flex right-2 top-2 z-30'
    {color}
    onclick={ON}
    onmouseenter={ON}
    {pulse}
  ></NavIcon>

  {#if dropped}
    <button
      class='fixed z-30 screen cursor-initial opacity-0'
      onmousedown={OFF}
      ontouchstart={OFF}
      tabindex='-1'
    >
      Close Navigation
    </button>
    <NavBody
      {GOTO}
      clazz='fixed right-2 top-2 z-40'
      {color}
      onmouseleave={OFF}
      {pulse}
      {tops}
    />
  {/if}
</nav>
