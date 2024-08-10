<script>
  import 'core-js/proposals/set-methods-v2'
  import autoAnimate from '@formkit/auto-animate'
  import { getContext } from 'svelte'

  let { actives = $bindable(), ordered, ...props } = $props()

  const D = getContext('D')

  const alltags = $derived(
    new Set(
      ordered
        .reduce((a, [b, t]) => t ? a.union(D.tags.get(b)) : a, new Set())
    )
  )
</script>

<div {...props}>
  <p bold mb-3>Filter:</p>
  <menu flex="~ wrap" gap-3 use:autoAnimate>
    {#each [...alltags].sort() as tag (tag)}
      <li>
        <button
          class={actives.has(tag) ? 'text-green' : 'text-gray-500'}
          aria-label="filter by tag: {tag}"
          b="1 current"
          bg-transparent
          onclick={e => {
            if (actives.has(tag)) actives.delete(tag)
            else actives.add(tag)
            e.target.blur()
          }}
          outline-none
          px-2
          py-1
          text="[&:hover,&:focus,&:active]:white"
          transition-color
          whitespace-nowrap
        >
          {tag}
        </button>
      </li>
    {/each}
  </menu>
</div>
