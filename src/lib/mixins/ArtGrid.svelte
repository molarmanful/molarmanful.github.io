<script>
  import {
    activeElement,
    createFocusTrap,
    createKeyStroke,
  } from '@grail-ui/svelte'
  import { getContext } from 'svelte'

  import { gridData, tabs } from '../js/util'

  const D = getContext('D')

  const rfocus = getContext('focus')
  const { hasFocus, activate, deactivate, useFocusTrap } = createFocusTrap({
    clickOutsideDeactivates: true,
    setReturnFocus: () => $rfocus || false,
  })

  let el
  let ts = []
  let cs = 1

  $: el?.contains($activeElement) ? activate() : deactivate()

  createKeyStroke({
    key: ['Escape'],
    handler() {
      deactivate()
      $activeElement.blur()
    },
  })

  const wrap = f => e => {
    if ($hasFocus) {
      e.preventDefault()
      const i = ts.indexOf($activeElement)
      const i1 = f(i)
      if (0 <= i1 && i1 < ts.length) ts[i1].focus()
    }
  }

  createKeyStroke({
    key: ['ArrowUp'],
    handler: wrap(i => i - cs),
  })

  createKeyStroke({
    key: ['ArrowLeft'],
    handler: wrap(i => i - 1),
  })

  createKeyStroke({
    key: ['ArrowDown'],
    handler: wrap(i => i + cs),
  })

  createKeyStroke({
    key: ['ArrowRight'],
    handler: wrap(i => i + 1),
  })
</script>

<div
  bind:this={el}
  gap="5 md:8"
  grid="~ cols-1 sm:cols-2 md:cols-3 xl:cols-4"
  use:gridData={{
    f({ cols }) {
      cs = cols
    },
  }}
  use:tabs={{
    f(tabs) {
      ts = tabs
    },
  }}
  use:useFocusTrap
  {...$$restProps}
>
  {#each D.covers as [name]}
    <slot n={name} />
  {/each}
</div>
