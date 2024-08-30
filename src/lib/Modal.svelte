<script lang='ts'>
  import { fade } from 'svelte/transition'

  import { cD } from './js/contexts'
  import { FocusTrap } from './js/util.svelte'
  import { A, ItemBar, ItemBody } from './mixins'

  interface Props {
    selected?: string
  }

  const { selected }: Props = $props()
  const { D } = cD.get()

  const It = $derived(selected && D.items.get(selected)?.default)

  let el = $state({ x: void 0 })
  let active = false

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
          <A class='decoration-current' href='/work/{selected}' item>permalink</A>
        </span>
      </div>
      <button
        aria-label='close entry'
        b='1 current'
        bg-transparent
        box-content
        duration-500
        flex
        h-full
        m='l-auto t--1px r--1px'
        onclick={OFF}
        outline-none
        text='[&:hover,&:focus]:white'
        transition-color
        w-16
      >
        <svg
          alt='close'
          fill-current
          h='1/2'
          m-auto
          viewBox='0 0 100 100'
          w='1/2'
        >
          <g transform='rotate(45, 50, 50)'>
            <rect height='20' width='100' y='40'></rect>
            <rect height='100' width='20' x='40'></rect>
          </g>
        </svg>
      </button>
    </ItemBar>

    <ItemBody bind:el>
      <div full in:fade={{ duration: 200 }}>
        <It />
      </div>
    </ItemBody>
  </div>
{/if}
