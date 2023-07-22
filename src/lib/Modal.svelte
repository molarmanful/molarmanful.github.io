<script>
  import { fade } from 'svelte/transition'
  import { ItemBar, A } from './mixins'

  export let selected
  export let D

  let OFF = _ => (selected = void 0)
  let escOFF = e => {
    if (e.key == 'Escape') OFF()
  }
</script>

<svelte:window on:keyup={escOFF} />

{#if selected && D.items.has(selected)}
  <div
    transition:fade={{ duration: 200 }}
    fixed
    screen
    inset-0
    bg-black
    z-50
    pt-16
    overflow-hidden
    overscroll-contain
  >
    <ItemBar>
      <div flex ml-4 h-full>
        <A
          un-text="inherit"
          decoration="none"
          m="auto"
          href="/items/{selected}"
        >
          {selected}
        </A>
      </div>
      <button
        aria-label="close modal"
        bg-transparent
        flex
        ml-auto
        w-16
        h-full
        cursor-pointer
        on:click={OFF}
        on:keyup={_ => {}}
      >
        <svg
          m-auto
          fill-current
          text-gray-700
          w="1/2"
          h="1/2"
          viewBox="0 0 100 100"
          alt="close"
        >
          <g transform="rotate(45, 50, 50)">
            <rect width="100" height="20" y="40" />
            <rect width="20" height="100" x="40" />
          </g>
        </svg>
      </button>
    </ItemBar>

    {#await D.items.get(selected)() then item}
      <div in:fade={{ duration: 200 }} full scroll overflow-x-hidden>
        <svelte:component this={item.default} {D} />
      </div>
    {/await}
  </div>
{/if}
