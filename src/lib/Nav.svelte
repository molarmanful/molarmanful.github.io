<script>
  import {
    useClickOutside,
    createFocusTrap,
    createKeyStroke,
  } from '@grail-ui/svelte'

  import { ccolor, sfactor } from './js/util'
  import { NavIcon, NavBody } from './mixins'

  import { browser } from '$app/environment'

  export let tops = []

  let { deactivate, useFocusTrap } = createFocusTrap({
    immediate: true,
    initialFocus: false,
  })

  let dropped = false
  let ON = e => {
    dropped = true
    e.target.blur()
  }
  let OFF = () => {
    dropped = false
    deactivate()
  }

  createKeyStroke({
    key: ['Escape'],
    handler: OFF,
  })

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
  <NavIcon
    aria-expanded={dropped}
    {clrs}
    {filter}
    fixed=""
    flex=""
    {len}
    {pulse}
    right="2"
    top="2"
    z="30"
    on:mouseenter={ON}
    on:click={ON}
    on:keyup={() => {}}
  ></NavIcon>

  {#if dropped}
    <div contents use:useClickOutside={{ handler: OFF }} use:useFocusTrap>
      <NavBody
        {clrs}
        {filter}
        fixed=""
        {len}
        {pulse}
        right="2"
        top="2"
        z="40"
        on:mouseleave={OFF}
      >
        {#each tops as top, i}
          <li>
            <button
              style:transition="color {pulse}ms, border-color 500ms, filter
              500ms"
              class={clrs[i]}
              bg-transparent
              border="b-1 transparent focus:white"
              ease
              filter="[&:hover,&:focus]:(brightness-0 invert)"
              outline-0
              on:click={GOTO(top.n)}
            >
              {top.name.toUpperCase()}
            </button>
          </li>
        {/each}
      </NavBody>
    </div>
  {/if}
</nav>
