import { SvelteSet } from 'svelte/reactivity'

import { sortedKeys, tags, tagsSet } from '$lib/ts/meta'

export class Tags {
  sel = new SvelteSet<string>()

  able = $derived.by(() => {
    if (this.sel.size === 0) return tagsSet
    return new Set([
      ...Object.values(tags).reduce(
        (a, b) => this.sel.isSubsetOf(b) ? a.union(b) : a,
        new Set(),
      ),
    ].toSorted((a, b) => a.localeCompare(b)))
  })

  sorted = $derived(
    this.sel.union(this.able).union(tagsSet),
  )

  nameSel = $derived.by(() => {
    const nameParts = Map.groupBy(
      sortedKeys,
      name => this.sel.size > 0 ? this.sel.isSubsetOf(tags[name]) : true,
    )
    return ([
      [true, nameParts.get(true) ?? []],
      [false, nameParts.get(false) ?? []],
    ] as const).flatMap(([isSel, names]) =>
      names.map(name => [name, isSel] as const)
    )
  })
}
