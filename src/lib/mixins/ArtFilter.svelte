<script>
  import 'core-js/proposals/set-methods-v2'
  import autoAnimate from '@formkit/auto-animate'
  import { getContext } from 'svelte'

  import { FocusTrap } from '../js/util.svelte'

  const { aos, chosen, ...props } = $props()

  const D = getContext('D')
  const rfocus = getContext('focus')
  const actives = getContext('actives')

  const { activate, deactivate, useFocusTrap } = new FocusTrap({
    clickOutsideDeactivates: true,
    setReturnFocus: () => rfocus?.x || false,
  }).fns
  let el = $state()
  let activeElement = $state()
  const focused = $derived(el?.contains(activeElement))

  const [all, xs] = $derived(
    [...D.covers.keys()].reduce(
      ([a0, a1], b) => {
        const c = D.tags.get(b)
        return [a0.union(c), chosen.has(b) ? a1.union(c) : a1]
      },
      [new Set(), new Set()]
    )
  )
  const not_actives = $derived(xs.difference(actives.x))
  const not_xs = $derived(all.difference(xs))
  const alltags = $derived(
    [actives.x, not_actives, not_xs].flatMap(a => [...a].sort())
  )
</script>

<svelte:window
  onkeydown={e => {
    if (!focused) return
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
        activeElement.blur()
        break
    }
  }}
/>
<svelte:document bind:activeElement />

<div {...props}>
  <h3 bold data-aos={aos && 'fade-in'} mb-1.5 text-bord-500>Filter:</h3>
  <menu bind:this={el} id="anchor-filter" use:autoAnimate use:useFocusTrap>
    {#if actives.x.size}
      <li
        data-aos={aos && 'fade-in'}
        data-aos-anchor="#anchor-filter"
        inline-block
        m-1.5
      >
        <button
          aria-label="clear all filtered tags"
          btn
          onclick={() => {
            actives.x.clear()
          }}
          text-no
        >
          clear
        </button>
      </li>
    {/if}{#each alltags as tag, i (tag)}
      <li
        data-aos={aos && 'fade-in'}
        data-aos-anchor="#anchor-filter"
        data-aos-delay={50 * (i + !!actives.x.size)}
        inline-block
        m-1.5
      >
        <button
          class={actives.x.has(tag) ? 'text-yes'
          : xs.has(tag) ? 'text-bord'
          : 'text-bord-900 pointer-events-none'}
          aria-label="filter by tag: {tag}"
          btn
          disabled={not_xs.has(tag)}
          onclick={e => {
            if (actives.x.has(tag)) actives.x.delete(tag)
            else actives.x.add(tag)
            e.target.blur()
          }}
        >
          {tag}
        </button>
      </li>
    {/each}
  </menu>
</div>
