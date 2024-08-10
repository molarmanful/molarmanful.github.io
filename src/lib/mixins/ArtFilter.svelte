<script>
  import 'core-js/proposals/set-methods-v2'
  import autoAnimate from '@formkit/auto-animate'
  import { getContext } from 'svelte'

  let { actives = $bindable(), ordered, ...props } = $props()

  const D = getContext('D')

  const alltags = $derived(
    new Set(
      ordered.reduce((a, [b, t]) => (t ? a.union(D.tags.get(b)) : a), new Set())
    )
  )
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
    {#each [...alltags].sort() as tag (tag)}
      <li>
        <button
          class={actives.has(tag) ? 'text-green' : 'text-gray-500'}
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
