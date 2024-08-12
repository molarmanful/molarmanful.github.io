<script>
  import 'core-js/proposals/set-methods-v2'
  import autoAnimate from '@formkit/auto-animate'
  import { getContext } from 'svelte'
  import { SvelteSet } from 'svelte/reactivity'

  let { actives = $bindable(), chosen, ...props } = $props()

  const D = getContext('D')

  const [all, xs] = $derived(
    [...D.covers.keys()].reduce(
      ([a0, a1], b) => {
        const c = D.tags.get(b)
        return [a0.union(c), chosen.has(b) ? a1.union(c) : a1]
      },
      [new Set(), new Set()]
    )
  )
  const not_actives = $derived(xs.difference(actives))
  const not_xs = $derived(all.difference(xs))
  const alltags = $derived(
    [actives, not_actives, not_xs].flatMap(a => [...a].sort())
  )

  $effect.pre(() => {
    const x = sessionStorage.getItem('actives')
    if (x) actives = new SvelteSet(JSON.parse(x))
  })

  $effect(() => {
    sessionStorage.setItem('actives', JSON.stringify([...actives]))
  })
</script>

<div {...props}>
  <p bold mb-3>Filter:</p>
  <menu flex="~ wrap" gap-3 use:autoAnimate>
    {#if actives.size}
      <li>
        <button
          aria-label="clear all filtered tags"
          btn
          onclick={() => {
            actives.clear()
          }}
          text-pink-500
        >
          clear
        </button>
      </li>
    {/if}
    {#each alltags as tag (tag)}
      <li>
        <button
          class={actives.has(tag) ? 'text-green'
          : xs.has(tag) ? 'text-gray-500'
          : 'text-gray-800 pointer-events-none'}
          aria-label="filter by tag: {tag}"
          btn
          disabled={not_xs.has(tag)}
          onclick={e => {
            if (actives.has(tag)) actives.delete(tag)
            else actives.add(tag)
            e.target.blur()
          }}
        >
          {tag}
        </button>
      </li>
    {/each}
  </menu>
</div>
