<script>
  import 'core-js/proposals/set-methods-v2'
  import autoAnimate from '@formkit/auto-animate'
  import { getContext } from 'svelte'
  import { SvelteSet } from 'svelte/reactivity'

  let { actives = $bindable(), ordered, ...props } = $props()

  const D = getContext('D')

  const [all, xs] = $derived(
    ordered.reduce(
      ([a0, a1], [b, t]) => {
        const c = D.tags.get(b)
        return [a0.union(c), t ? a1.union(c) : a1]
      },
      [new Set(), new Set()]
    )
  )
  const not_actives = $derived(xs.difference(actives))
  const not_xs = $derived(all.difference(xs))
  const alltags = $derived(
    [actives, not_actives].flatMap(a => [...a].sort())
  )

  $effect(() => {
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
          class={
            actives.has(tag) ?
              'text-green'
            : xs.has(tag) ?
              'text-gray-500'
            : 'text-gray-800'
          }
          disabled={not_xs.has(tag)}
          aria-label="filter by tag: {tag}"
          btn
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
