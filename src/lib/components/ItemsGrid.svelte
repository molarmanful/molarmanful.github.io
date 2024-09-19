<script lang='ts'>
  import type { Snippet } from 'svelte'

  import { cD, cfocus, cscroll } from '$lib/js/contexts'
  import Flip from '$lib/js/flip.svelte'
  import { FocusTrap } from '$lib/js/util.svelte'
  import 'core-js/proposals/set-methods-v2'
  import { useEventListener } from 'runed'
  import { tabbable } from 'tabbable'

  import { ItemsFilter } from '.'

  interface Props {
    aosS?: 'up' | 'in'
    children: Snippet<[string, boolean, boolean]>
  }

  const { aosS, children, ...rest }: Props = $props()
  const { D, actives, batch, fo, rm } = cD.get()
  const rfocus = cfocus.get()
  const scroller = cscroll.get()

  const { activate, deactivate, useFocusTrap } = new FocusTrap({
    clickOutsideDeactivates: true,
    setReturnFocus: () => rfocus?.x || false,
  }).fns

  let el = $state<HTMLElement>()
  let activeElement = $state<HTMLElement>()
  const focused = $derived(!!(activeElement && el?.contains(activeElement)))

  let ts: HTMLElement[] = $state([])
  let cs = $state(1)

  const wrap = (e: Event, f: (a: number) => number) => {
    activate()
    e.preventDefault()
    const i = ts.indexOf(activeElement as HTMLElement)
    const i1 = f(i)
    if (i1 >= 0 && i1 < ts.length)
      ts[i1].focus()
  }

  const calcgrid = () => {
    if (!el)
      return
    const styles = getComputedStyle(el)
    const p = (v: string) =>
      styles.getPropertyValue(v).split(' ').filter(x => x !== '0px').length
    // const length = el.childElementCount
    // const rows = p('grid-template-rows')
    const cols = p('grid-template-columns')
    cs = cols
  }

  $effect(() => {
    if (!el)
      return
    ts = tabbable(el) as HTMLElement[]
    calcgrid()
  })

  useEventListener(() => window, 'resize', calcgrid)

  const covers = new Set(D.covers[0].keys())
  const chosen = $derived(
    actives.x.size
      ? [...covers].reduce(
        (a, b) => {
          const c = D.tags.get(b)
          if (c === void 0)
            throw new Error('c is undefined')
          return actives.x.isSubsetOf(c) ? a.add(b) : a
        },
        new Set<string>(),
      )
      : covers,
  )
  const not_chosen = $derived(covers.difference(chosen))
  const ordered = $derived([chosen, not_chosen].flatMap(a => [...a]))

  let anim = $state(true)
  const animels: Element[] = $state([])

  const itemsFlip = new Flip('items')

  $effect(() => {
    if (rm?.matches)
      return

    itemsFlip.flip()
  })
</script>

<svelte:window
  onkeydown={(e) => {
    if (!focused)
      return
    switch (e.key) {
      case 'Escape':
        deactivate()
        activeElement?.blur()
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

<ItemsFilter class='mb-5 md:mb-8' {aosS} {chosen} {itemsFlip} bind:anim />

<div
  bind:this={el}
  class='grid cols-1 gap-5 md:cols-3 sm:cols-2 xl:cols-4 2xl:gap-8'
  data-flip
  use:batch={{
    on: !!aosS,
    type: `fade-${aosS && !fo?.matches ? aosS : 'in'}`,
    stagger: 0.1,
    scroller: scroller?.x,
  }}
  use:useFocusTrap
  {...rest}
>
  {#each ordered as name, i}
    {@const on = chosen.has(name)}
    <div
      bind:this={animels[i]}
      class="{on ? '' : 'brightness-10 pointer-events-none!'} {anim ? '' : 'suppress'} flex transition-filter"
      data-batch
      data-flip-id='item-{name}'
    >
      {@render children(name, on, ((i / cs) | 0) % 2 === (i % cs) % 2)}
    </div>
  {/each}
</div>
