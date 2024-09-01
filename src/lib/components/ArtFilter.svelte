<script lang='ts'>
  import 'core-js/proposals/set-methods-v2'
  import autoAnimate from '@formkit/auto-animate'
  import type { HTMLAttributes } from 'svelte/elements'

  import { cD, cfocus } from '../js/contexts'
  import { FocusTrap } from '../js/util.svelte'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    aosS?: string
    anim?: boolean
    chosen: Set<string>
  }

  let { aosS, anim = $bindable(), chosen, ...props }: Props = $props()

  const { D, actives } = cD.get()
  const rfocus = cfocus.get()

  const { activate, deactivate, useFocusTrap } = new FocusTrap({
    clickOutsideDeactivates: true,
    setReturnFocus: () => rfocus?.x || false,
  }).fns

  let el: HTMLElement | undefined = $state()
  let activeElement: HTMLElement | undefined = $state()
  const focused = $derived(!!(activeElement && el?.contains(activeElement)))

  const [all, xs] = $derived(
    [...D.covers.keys()].reduce(
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
    anim = void 0
    setTimeout(() => {
      anim = true
    }, 250)
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

<div {...props}>
  <h3 class='mb-1.5 text-bord-500 bold' data-aos={aosS && 'fade-in'}>Filter:</h3>
  <menu bind:this={el} id='anchor-filter' use:autoAnimate use:useFocusTrap>
    {#if actives.x.size}
      <li
        class='m-1.5 inline-block'
        data-aos={aosS && 'fade-in'}
        data-aos-anchor='#anchor-filter'
      >
        <button
          class='btn text-no'
          aria-label='clear all filtered tags'
          onclick={() => {
            handleAnim()
            actives.x.clear()
          }}
        >
          clear
        </button>
      </li>
    {/if}{#each alltags as tag, i (tag)}
      <li
        class='m-1.5 inline-block'
        data-aos={aosS && 'fade-in'}
        data-aos-anchor='#anchor-filter'
        data-aos-delay={50 * (i + +!!actives.x.size)}
      >
        <button
          class="{actives.x.has(tag)
            ? 'text-yes'
            : xs.has(tag)
            ? 'text-bord'
            : 'text-bord-900 pointer-events-none'} btn"
          aria-label='filter by tag: {tag}'
          disabled={not_xs.has(tag)}
          onclick={(e) => {
            handleAnim()
            if (actives.x.has(tag)) {
              actives.x.delete(tag)
              return
            }
            actives.x.add(tag)
            ;(e.target as HTMLElement).blur()
          }}
        >
          {tag}
        </button>
      </li>
    {/each}
  </menu>
</div>
