<script>
  import { getContext } from 'svelte'
  import { fade } from 'svelte/transition'

  import { FocusTrap } from './js/util.svelte'
  import { A, ItemBar, ItemBody } from './mixins'

  const selected = getContext('selected')
  const D = getContext('D')

  let el = $state({ x: void 0 })
  const { activate, useFocusTrap } = new FocusTrap({
    setReturnFocus: () => el.x || false,
  }).fns

  const OFF = () => {
    selected.x = void 0
  }
</script>

<svelte:window
  onkeydown={e => {
    if (!selected.x) return

    switch (e.key) {
      case 'Tab':
        activate()
        break
      case 'Escape':
        OFF()
        break
    }
  }}
/>

{#if D.items.has(selected.x)}
  <div
    aria-label="entry: {selected.x}"
    bg-black
    dscreen
    fixed
    inset-0
    overflow-hidden
    overscroll-contain
    pt-16
    role="dialog"
    z-50
    use:useFocusTrap
    transition:fade={{ duration: 200 }}
  >
    <ItemBar>
      <div flex h-full ml-4>
        <span m-auto>
          {selected.x} -
          <A decoration="current" href="/work/{selected.x}" item>permalink</A>
        </span>
      </div>
      <button
        aria-label="close entry"
        b="1 current"
        bg-transparent
        box-content
        duration-500
        flex
        h-full
        m="l-auto t--1px r--1px"
        onclick={OFF}
        outline-none
        text="[&:hover,&:focus]:white"
        transition-color
        w-16
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
      <div full in:fade={{ duration: 200 }}>
        <svelte:component this={D.items.get(selected.x).default} />
      </div>
    </ItemBody>
  </div>
{/if}
