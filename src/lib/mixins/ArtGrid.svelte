<script>
  import { useEventListener } from 'runed'
  import { getContext } from 'svelte'
  import { tabbable } from 'tabbable'

  import { FocusTrap } from '../js/util.svelte'

  let { children, ...props } = $props()
  const D = getContext('D')
  let rfocus = getContext('focus')?.()

  const ft = new FocusTrap({
    clickOutsideDeactivates: true,
    setReturnFocus: () => rfocus?.x || false,
  })
  const { activate, deactivate, useFocusTrap } = ft.fns

  let activeElement = $state()

  const wrap = (e, f) => {
    if (ft.hasFocus) {
      e.preventDefault()
      const i = ts.indexOf(activeElement)
      const i1 = f(i)
      if (0 <= i1 && i1 < ts.length) ts[i1].focus()
    }
  }

  let el = $state()
  let ts = $state([])
  let cs = $state(1)

  const calcgrid = () => {
    if (!el) return
    const styles = getComputedStyle(el)
    const p = v =>
      styles.getPropertyValue(v).split` `.filter(x => x != '0px').length
    // const length = el.childElementCount
    // const rows = p('grid-template-rows')
    const cols = p('grid-template-columns')
    cs = cols
  }

  $effect(() => {
    if (el) {
      el.contains(activeElement) ? activate() : deactivate()
      ts = tabbable(el)
      calcgrid()
    }
  })
  useEventListener(() => window, 'resize', calcgrid)
</script>

<svelte:window
  onkeydown={e => {
    switch (e.key) {
      case 'Escape':
        deactivate()
        activeElement.blur()
        break
      case 'ArrowUp':
        wrap(e, i => i - cs)
        break
      case 'ArrowLeft':
        wrap(e, i => i - 1)
        break
      case 'ArrowDown':
        wrap(e, i => i + cs)
        break
      case 'ArrowRight':
        wrap(e, i => i + 1)
        break
    }
  }}
/>

<svelte:document bind:activeElement />

<div
  bind:this={el}
  gap="5 md:8"
  grid="~ cols-1 sm:cols-2 md:cols-3 xl:cols-4"
  use:useFocusTrap
  {...props}
>
  {#each D.covers as [name]}
    {@render children(name)}
  {/each}
</div>
