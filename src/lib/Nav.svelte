<script>
  import { browser } from '$app/environment'
  import { scale } from 'svelte/transition'
  import { clickout } from './js/util'

  export let tops

  let dropped = false
  let ON = _ => (dropped = true)
  let OFF = _ => (dropped = false)

  let GOTO = top => {
    if (browser) scrollTo({ top, behavior: 'smooth' })
  }
</script>

<nav>
  <button
    aria-label="open menu"
    fixed
    top-2
    right-2
    h-16
    w-16
    border="1 gray-500"
    text-gray-500
    bg-black
    z-30
    cursor-pointer
    flex
    transition-colors
    on:mouseenter={ON}
    on:click={ON}
    on:keyup={_ => {}}
  >
    <svg m-auto fill-current w="1/2" h="1/2" viewBox="0 0 100 100" alt="menu">
      <rect width="100" height="20" />
      <rect width="100" height="20" y="40" />
      <rect width="100" height="20" y="80" />
    </svg>
  </button>

  {#if dropped}
    <div
      transition:scale={{ duration: 200 }}
      role="menu"
      tabindex="0"
      fixed
      z-40
      p-4
      top-2
      right-2
      bg-black
      border="1 gray-500"
      ease-in-out
      origin-top-right
      on:mouseleave={OFF}
      use:clickout
      on:clickout={OFF}
    >
      <menu font-1 text-3xl leading-8>
        {#each tops as top}
          <li>
            <button navitem on:click={GOTO(top.n)}>
              {top.name.toUpperCase()}
            </button>
          </li>
        {/each}
      </menu>
    </div>
  {/if}
</nav>
