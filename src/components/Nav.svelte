<script>
  import { scale } from 'svelte/transition'
  import { clickout } from '../js/util'

  let dropped = false
  let ON = _ => (dropped = true)
  let OFF = _ => (dropped = false)

  let GOTO = e => {
    e.preventDefault()
    scrollTo({
      top: document.getElementById(
        new URL(e.currentTarget).hash.replace(/#/, '')
      ).offsetTop,
      behavior: 'smooth',
    })
  }
</script>

<nav>
  <div
    role="button"
    tabindex="0"
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
    on:keypress={_ => {}}
  >
    <svg m-auto fill-current w="1/2" h="1/2" viewBox="0 0 100 100" alt="menu">
      <rect width="100" height="20" />
      <rect width="100" height="20" y="40" />
      <rect width="100" height="20" y="80" />
    </svg>
  </div>

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
        {#each ['top', 'abt', 'art'] as i}
          <li>
            <a navitem href={'#' + i} on:click={GOTO}>
              {i.toUpperCase()}
            </a>
          </li>
        {/each}
      </menu>
    </div>
  {/if}
</nav>
