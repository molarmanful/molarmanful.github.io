<script>
  import { colors } from './js/static'
  import { clickout, sfactor } from './js/util.svelte'
  import { NavBody, NavIcon } from './mixins'

  import { browser } from '$app/environment'

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
    if (browser) {
      dropped = false
      scrollTo({ top })
    }
  }

  let factor = $state(0)
  sfactor(x => (factor = x))

  const pulse = 2000
  const len = 4
  const clrs = $state([...Array(len)].map(() => 'text-gray-500'))
  let filter = $derived(
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
      {clrs}
      {filter}
      fixed=""
      {len}
      onmouseleave={OFF}
      {pulse}
      right="2"
      top="2"
      z="40"
    >
      {#each tops as top, i}
        <li>
          <button
            style:transition="color {pulse}ms, border-color 500ms, filter 500ms"
            class={clrs[i]}
            b="b-1 transparent focus:white"
            bg-transparent
            ease
            filter="[&:hover,&:focus]:(brightness-0 invert)"
            onclick={GOTO(top.n)}
            outline-none
          >
            {top.name.toUpperCase()}
          </button>
        </li>
      {/each}
    </NavBody>
  {/if}
</nav>
