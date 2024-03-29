<script>
  import { createFocusTrap, createKeyStroke } from '@grail-ui/svelte'
  import { getContext } from 'svelte'
  import { fade } from 'svelte/transition'

  import { A, ItemBar, ItemBody } from './mixins'

  const D = getContext('D')

  export let selected
  const OFF = () => {
    selected = void 0
  }

  let el
  const { activate, useFocusTrap } = createFocusTrap({
    setReturnFocus: () => el,
  })

  createKeyStroke({
    key: ['Tab'],
    handler: activate,
  })

  createKeyStroke({
    key: ['Escape'],
    handler: OFF,
  })
</script>

{#if selected && D.items.has(selected)}
  <div
    aria-label="entry: {selected}"
    bg-black
    fixed
    inset-0
    overflow-hidden
    overscroll-contain
    pt-16
    role="dialog"
    screen
    z-50
    use:useFocusTrap
    transition:fade={{ duration: 200 }}
  >
    <ItemBar>
      <div flex h-full ml-4>
        <A href="/work/{selected}" item m="auto">
          {selected}
        </A>
      </div>
      <button
        aria-label="close entry"
        bg-transparent
        border="1 current"
        box-content
        duration-500
        flex
        h-full
        m="l-auto t--1px r--1px"
        outline-none
        text="[&:hover,&:focus]:white"
        transition-color
        w-16
        on:click={OFF}
        on:keyup={() => {}}
      >
        <svg
          alt="close"
          fill-current
          h="1/2"
          m-auto
          viewBox="0 0 100 100"
          w="1/2"
        >
          <g transform="rotate(45, 50, 50)">
            <rect height="20" width="100" y="40"></rect>
            <rect height="100" width="20" x="40"></rect>
          </g>
        </svg>
      </button>
    </ItemBar>

    <ItemBody bind:el>
      {#await D.items.get(selected)() then item}
        <div full in:fade={{ duration: 200 }}>
          <svelte:component this={item.default} />
        </div>
      {/await}
    </ItemBody>
  </div>
{/if}
