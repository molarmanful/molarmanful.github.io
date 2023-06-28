<script>
  import { fade } from 'svelte/transition'

  export let selected
  export let D

  let OFF = _ => (selected = void 0)
  let escOFF = e => {
    if (e.key == 'Escape') OFF()
  }
</script>

{#if selected}
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
    divide="y gray-700"
  >
    <div fixed flex top-0 right-0 w-16 h-16 cursor-pointer>
      <svg
        role="button"
        tabindex="0"
        m-auto
        fill-current
        text-gray-700
        w="1/2"
        h="1/2"
        viewBox="0 0 100 100"
        alt="close"
        on:click={OFF}
        on:keyup={_ => {}}
      >
        <g transform="rotate(45, 50, 50)">
          <rect width="100" height="20" y="40" />
          <rect width="20" height="100" x="40" />
        </g>
      </svg>
    </div>

    {#if D.items.has(selected)}
      {#await D.items.get(selected)()}
        <br />
      {:then item}
        <div
          in:fade={{ duration: 200 }}
          full
          scroll
          overflow-x-hidden
          text="xl gray-400"
        >
          <svelte:component this={item.default} {D} />
        </div>
      {/await}
    {/if}
  </div>
{/if}

<svelte:window on:keyup={escOFF} />
