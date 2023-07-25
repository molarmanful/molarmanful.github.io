<script>
  import { useClickOutside } from '@grail-ui/svelte'
  import { scale } from 'svelte/transition'

  import { ccolor, sfactor } from './js/util'

  import { browser } from '$app/environment'

  export let tops = []

  let dropped = false
  let ON = e => {
    dropped = true
    e.target.blur()
  }
  let OFF = () => (dropped = false)

  let GOTO = top => {
    if (browser) {
      dropped = false
      scrollTo({ top, behavior: 'smooth' })
    }
  }

  let factor = sfactor()
  let clrs = []
  let pulse = 2000
  let len = 4
  $: filter = `hue-rotate(${$factor * -69}deg) grayscale(${$factor * 1.2})`
</script>

<nav use:ccolor={{ pulse, len, f: x => (clrs = x) }}>
  <button
    style:transition-duration="{pulse}ms, 400ms, 400ms"
    style:filter
    class={clrs[len - 1]}
    aria-label="open navigation menu"
    bg-black
    border="1 current focus:white"
    cursor-pointer
    fixed
    flex
    h-16
    outline-0
    right-2
    top-2
    transition="color,border-color,filter"
    var_x="focus:white"
    w-16
    z-30
    on:mouseenter={ON}
    on:click={ON}
    on:keyup={() => {}}
  >
    <svg alt="menu" h="1/2" m-auto viewBox="0 0 100 100" w="1/2">
      {#each Array(3).keys() as i}
        <rect
          style:transition-duration="{pulse}ms, 400ms"
          class={clrs[i]}
          height="20"
          transition="color,fill"
          un-fill="[var(--x,currentColor)]"
          width="100"
          y={i * 40}
        ></rect>
      {/each}
    </svg>
  </button>

  {#if dropped}
    <div
      style:transition-duration="{pulse}ms"
      style:filter
      class={clrs[len - 1]}
      bg-black
      border="1 current"
      ease-in-out
      fixed
      origin-top-right
      p-4
      right-2
      role="navigation"
      top-2
      transition-color
      z-40
      on:mouseleave={OFF}
      use:useClickOutside={{ handler: OFF }}
      transition:scale={{ duration: 200 }}
    >
      <menu font-1 leading-8 text-3xl>
        {#each tops as top, i}
          <li>
            <button
              style:transition="color {pulse}ms, filter 500ms"
              class={clrs[i]}
              bg-transparent
              cursor-pointer
              filter="hover:(brightness-0 invert)"
              transition-ease
              on:click={GOTO(top.n)}
            >
              {top.name.toUpperCase()}
            </button>
          </li>
        {/each}
      </menu>
    </div>
  {/if}
</nav>
