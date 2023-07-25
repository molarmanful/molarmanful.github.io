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
    style:transition-duration="{pulse}ms"
    style:filter
    class={clrs[len - 1]}
    aria-label="open menu"
    bg-black
    border="1 current"
    cursor-pointer
    fixed
    flex
    h-16
    right-2
    top-2
    transition-color
    w-16
    z-30
    on:mouseenter={ON}
    on:click={ON}
    on:keyup={() => {}}
  >
    <svg alt="menu" h="1/2" m-auto viewBox="0 0 100 100" w="1/2">
      {#each Array(3).keys() as i}
        <rect
          style:transition-duration="{pulse}ms"
          class={clrs[i]}
          fill-current
          height="20"
          transition-color
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
      role="menu"
      tabindex="0"
      top-2
      transition-color
      z-40
      on:mouseleave={OFF}
      on:clickout={OFF}
      use:clickout
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
