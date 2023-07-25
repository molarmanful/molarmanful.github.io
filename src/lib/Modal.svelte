<script>
  import { getContext } from 'svelte'
  import { fade } from 'svelte/transition'

  import { ItemBar, ItemBody, A, UpWrap } from './mixins'

  let D = getContext('D')

  export let selected

  let OFF = () => (selected = void 0)
  let escOFF = e => {
    if (e.key == 'Escape') OFF()
  }
</script>

<svelte:window on:keyup={escOFF} />

{#if selected && D.items.has(selected)}
  <div
    bg-black
    fixed
    inset-0
    overflow-hidden
    overscroll-contain
    pt-16
    screen
    z-50
    transition:fade={{ duration: 200 }}
  >
    <ItemBar>
      <div flex h-full ml-4>
        <A decoration="none" href="/items/{selected}" item m="auto">
          {selected}
        </A>
      </div>
      <button
        aria-label="close modal"
        bg-transparent
        border="l-1 current"
        cursor-pointer
        flex
        h-full
        ml-auto
        w-16
        on:click={OFF}
        on:keyup={() => {}}
      >
        <svg
          alt="close"
          duration-500
          h="1/2"
          m-auto
          transition-fill
          un-fill="current hover:white"
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

    <ItemBody>
      {#await D.items.get(selected)() then item}
        <div full in:fade={{ duration: 200 }}>
          <UpWrap item={item.default} />
        </div>
      {/await}
    </ItemBody>
  </div>
{/if}
