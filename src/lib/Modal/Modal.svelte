<script lang='ts'>
  import { A, ItemBar, ItemBody } from '$lib/components'

  import { cD, cscroll } from '$lib/js/contexts'
  import { FocusTrap } from '$lib/js/util.svelte'
  import { fade } from 'svelte/transition'

  interface Props {
    selected?: string
  }

  const { selected }: Props = $props()
  const { D } = cD.get()

  const It = $derived(selected ? D.items.get(selected)?.default : void 0)

  const el: { x?: HTMLElement } = $state({ x: void 0 })
  let active = false
  cscroll.set(el)

  const { activate, deactivate, useFocusTrap } = new FocusTrap({
    setReturnFocus: () => el.x || false,
  }).fns

  const OFF = () => {
    history.back()
  }
</script>

<svelte:window
  onkeydown={(e) => {
    if (!selected)
      return

    switch (e.key) {
      case 'Tab':
        activate()
        active = true
        break
      case 'Escape':
        if (active) {
          deactivate()
          active = false
        }
        else {
          OFF()
        }
        break
    }
  }}
/>

{#if selected && D.items.has(selected)}
  <div
    class='fixed inset-0 z-50 dscreen overflow-hidden overscroll-contain bg-black pt-16'
    aria-label='entry: {selected}'
    role='dialog'
    use:useFocusTrap
    transition:fade={{ duration: 200 }}
  >
    <ItemBar>
      <div class='ml-4 h-full flex'>
        <span class='m-auto'>
          {selected} -
          <A clazz='decoration-current' data-sveltekit-reload href='/work/{selected}' item t>permalink</A>
        </span>
      </div>
      <button
        class='ml-auto mr--1px mt--1px box-content h-full w-16 flex b-(1 current) bg-transparent outline-none transition-color duration-500 [&:hover,&:focus]:text-white'
        aria-label='close entry'
        onclick={OFF}
      >
        <svg
          class='m-auto h-1/2 w-1/2 fill-current'
          viewBox='0 0 100 100'
        >
          <title>Close</title>
          <g transform='rotate(45, 50, 50)'>
            <rect height='20' width='100' y='40'></rect>
            <rect height='100' width='20' x='40'></rect>
          </g>
        </svg>
      </button>
    </ItemBar>

    <ItemBody bind:el={el.x}>
      <div class='full' in:fade={{ duration: 200 }}>
        <It />
      </div>
    </ItemBody>
  </div>
{/if}
