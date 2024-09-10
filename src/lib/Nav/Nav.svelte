<script lang='ts'>
  import { Body, Icon } from '.'

  import { cD } from '$lib/js/contexts'
  import { hexes } from '$lib/js/static'

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
  const GOTO = (top: string) => ({ target }: Event) => {
    scrollTo({ top: document.getElementById(top)?.offsetTop })
    ;(target as HTMLElement).blur()
  }

  // const filter = $derived(
  //   `hue-rotate(${factor.x * -69}deg) grayscale(${factor.x * 1.2})`
  // )

  const cols: string[] = $state(Array(4).fill('#818cf8'))
  const pls = $state(2000)
  const pulse = $derived(factor.x >= 0.95 ? pls / 2 : pls)
  const colors = $derived(
    cols.map(c =>
      `color-mix(in oklab, #818cf8 ${Math.max(0, Math.min(1, factor.x * 2 - 1)) * 100}%, ${c})`),
  )

  let ic = 0
  let i = 0
  $effect(() => {
    const t = setInterval(() => {
      cols[i] = hexes[500][ic]
      i++
      i %= 4
      if (i <= 0) {
        ic++
        ic %= hexes[500].length
      }
    }, pls / 4)

    return () => clearInterval(t)
  })
</script>

<svelte:window
  onkeydown={(e) => {
    if (e.key === 'Escape')
      OFF()
  }}
/>

{#if dropped}
  <button
    class='fixed z-30 screen cursor-initial opacity-0'
    onmousedown={OFF}
    ontouchstart={OFF}
    tabindex='-1'
  >
    Close Navigation
  </button>
{/if}

<nav onmouseenter={ON} onmouseleave={OFF}>
  <Icon
    aria-expanded={dropped}
    clazz='fixed flex right-2 top-2 z-30'
    {colors}
    onclick={ON}
    {pulse}
  ></Icon>

  {#if dropped}
    <Body
      {GOTO}
      clazz='fixed right-2 top-2 z-40'
      {colors}
      {pulse}
      {tops}
    />
  {/if}
</nav>
