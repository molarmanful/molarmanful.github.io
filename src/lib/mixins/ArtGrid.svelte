<script lang='ts'>
  import 'core-js/proposals/set-methods-v2'
  import autoAnimate from '@formkit/auto-animate'
  import { useEventListener } from 'runed'
  import type { Snippet } from 'svelte'
  import { tabbable } from 'tabbable'

  import { cD, cfocus } from '../js/contexts'
  import { FocusTrap } from '../js/util.svelte'
  import { ArtFilter } from '../mixins'

  interface Props {
    aosS?: string
    children: Snippet<[string, boolean, boolean]>
  }

  const { aosS, children, ...props }: Props = $props()
  const { D, actives, aos, fo } = cD.get()
  const rfocus = cfocus.get()

  const { activate, deactivate, useFocusTrap } = new FocusTrap({
    clickOutsideDeactivates: true,
    setReturnFocus: () => rfocus?.x || false,
  }).fns

  let el: HTMLElement | undefined = $state()
  let activeElement: HTMLElement | undefined = $state()
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

  const covers = new Set(D.covers.keys())
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

  $effect(() => {
    if (!anim || !aos.on)
      return
    for (const el of animels) aos.manual(el, el)
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

<ArtFilter class='mb-3.5 md:mb-6.5' {aosS} {chosen} bind:anim />

<div
  bind:this={el}
  class='grid cols-1 gap-5 md:(cols-3 gap-8) sm:cols-2 xl:cols-4'
  use:autoAnimate
  use:useFocusTrap
  {...props}
>
  {#each ordered as name, i (name)}
    {@const on = chosen.has(name)}
    <div
      bind:this={animels[i]}
      class="{on ? '' : 'brightness-10 pointer-events-none!'} {anim ? '' : 'suppress'} flex transition-filter,opacity,transform"
      data-aos={aosS && anim && `fade-${fo?.matches ? 'in' : aosS}`}
      data-aos-delay={aosS && anim && 100 * (i % cs)}
    >
      {@render children(name, on, ((i / cs) | 0) % 2 === (i % cs) % 2)}
    </div>
  {/each}
</div>
