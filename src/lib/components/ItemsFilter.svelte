<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'

  import { cD, cfocus, cscroll } from '$lib/js/contexts'
  import Flip from '$lib/js/flip.svelte'
  import { FocusTrap } from '$lib/js/util.svelte'
  import { tick } from 'svelte'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    aosS?: string
    itemsFlip: Flip
    anim: boolean
    chosen: Set<string>
  }

  let { aosS, itemsFlip, anim = $bindable(), chosen, ...rest }: Props = $props()

  const { D, aos, actives } = cD.get()
  const rfocus = cfocus.get()
  const scroller = cscroll.get()

  const { activate, deactivate, useFocusTrap } = new FocusTrap({
    clickOutsideDeactivates: true,
    setReturnFocus: () => rfocus?.x || false,
  }).fns

  let el: HTMLElement | undefined = $state()
  let activeElement: HTMLElement | undefined = $state()
  const focused = $derived(!!(activeElement && el?.contains(activeElement)))

  const [all, xs] = $derived(
    [...D.covers[0].keys()].reduce(
      ([a0, a1], b) => {
        const c = D.tags.get(b)
        if (c === void 0)
          throw new Error('c is undefined')
        return [a0.union(c), chosen.has(b) ? a1.union(c) : a1]
      },
      [new Set<string>(), new Set<string>()],
    ),
  )
  const not_actives = $derived(xs.difference(actives.x))
  const not_xs = $derived(all.difference(xs))
  const alltags = $derived(
    [actives.x, not_actives, not_xs].flatMap(a => [...a].sort()),
  )

  const handleAnim = () => {
    itemsFlip.batch?.getState()
  }

  const handleRun = () => {
    tick().then(() => {
      itemsFlip.batch?.run(true)
    })
  }
</script>

<svelte:window
  onkeydown={(e) => {
    if (!focused)
      return
    switch (e.key) {
      case ' ':
      case 'Enter':
        activate()
        break
      case 'Tab':
        deactivate()
        break
      case 'Escape':
        deactivate()
        activeElement?.blur()
        break
    }
  }}
/>
<svelte:document bind:activeElement />

<div {...rest}>
  <h2
    class='mb-3 text-bord-500 bold'
    use:aos={{ on: !!aosS, scroller: () => scroller?.x }}
  >
    Filter:
  </h2>

  <menu
    bind:this={el}
    id='anchor-filter'
    class='flex flex-wrap gap-3 px-1'
    data-flip
    use:useFocusTrap
  >
    <li
      class={actives.x.size > 0 ? '' : 'hidden'}
      data-flip-id='filter@clear'
      use:aos={{
        on: !!aosS,
        trigger: '#anchor-filter',
        scroller: () => scroller?.x,
      }}
    >
      <button
        class='btn text-no'
        aria-label='clear all filtered tags'
        onclick={() => {
          handleAnim()
          actives.x.clear()
          handleRun()
        }}
      >
        clear
      </button>
    </li>

    {#each alltags as tag, i}
      <li
        data-flip-id='filter-{tag}'
        use:aos={{
          on: !!aosS,
          trigger: '#anchor-filter',
          delay: 0.03 * (i + 1),
          scroller: () => scroller?.x,
        }}
      >
        <button
          class="btn {actives.x.has(tag)
            ? 'text-yes'
            : xs.has(tag)
            ? 'text-bord'
            : 'pointer-events-none text-bord-900'}"
          aria-label='filter by tag: {tag}'
          disabled={not_xs.has(tag)}
          onclick={(e) => {
            handleAnim()
            if (actives.x.has(tag))
              actives.x.delete(tag)
            else actives.x.add(tag)
            ;(e.target as HTMLElement).blur()
            handleRun()
          }}
        >
          {tag}
      </li>
    {/each}
  </menu>
</div>
