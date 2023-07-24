<script>
  import { onMount } from 'svelte'
  import { scale } from 'svelte/transition'

  import { clickout, colors } from './js/util'
  import { Factor } from './mixins'

  import { browser } from '$app/environment'

  export let tops = []

  let factor
  let dropped = false
  let ON = () => (dropped = true)
  let OFF = () => (dropped = false)

  let GOTO = top => {
    if (browser) {
      dropped = false
      scrollTo({ top, behavior: 'smooth' })
    }
  }

  $: filter = `hue-rotate(${factor * -69}deg) grayscale(${factor * 1.2})`

  let ic = 0
  let pulse = 2000
  let len = 4
  let clrs = [...Array(len)].map(() => 'text-gray-500')

  onMount(() => {
    let i = len - 1
    setInterval(() => {
      if (i == len - 1) ic = (ic + 1) % colors[500].length
      clrs[i] = colors[500][ic]
      i = (i + 1) % len
    }, pulse / len)
  })
</script>

<Factor bind:factor />

<nav>
  <button
    aria-label="open menu"
    fixed
    top-2
    right-2
    h-16
    w-16
    border="1 current"
    bg-black
    z-30
    cursor-pointer
    flex
    transition-color
    style:transition-duration="{pulse}ms"
    class={clrs[len - 1]}
    style:filter
    on:mouseenter={ON}
    on:click={ON}
    on:keyup={() => {}}
  >
    <svg m-auto w="1/2" h="1/2" viewBox="0 0 100 100" alt="menu">
      <!-- eslint-disable-next-line no-unused-vars -->
      {#each tops as _, i}
        <rect
          width="100"
          height="20"
          y={i * 40}
          fill-current
          transition-color
          style:transition-duration="{pulse}ms"
          class={clrs[i]}
        />
      {/each}
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
      border="1 current"
      ease-in-out
      origin-top-right
      transition-color
      class={clrs[len - 1]}
      style:transition-duration="{pulse}ms"
      style:filter
      on:mouseleave={OFF}
      use:clickout
      on:clickout={OFF}
    >
      <menu font-1 text-3xl leading-8>
        {#each tops as top, i}
          <li>
            <button
              on:click={GOTO(top.n)}
              cursor-pointer
              bg-transparent
              style:transition="color {pulse}ms, filter 500ms"
              transition-ease
              filter="hover:(brightness-0 invert)"
              class={clrs[i]}
            >
              {top.name.toUpperCase()}
            </button>
          </li>
        {/each}
      </menu>
    </div>
  {/if}
</nav>
