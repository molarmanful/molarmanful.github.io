import { sortedKeys, tags, tagsSet } from '$lib/ts/meta'
import { SvelteSet } from 'svelte/reactivity'

export class Tags {
  sel = new SvelteSet<string>()

  able = $derived(
    this.sel.size > 0
      ? new Set([
        ...Object.values(tags).reduce(
          (a, b) => this.sel.isSubsetOf(b) ? a.union(b) : a,
          new Set(),
        ),
      ].sort())
      : tagsSet,
  )

  sorted = $derived(
    this.sel.union(this.able).union(tagsSet),
  )

  // eslint-disable-next-line unicorn/consistent-function-scoping
  nameSel = $derived.by(() => {
    const nameParts = Map.groupBy(
      sortedKeys,
      name => this.sel.size > 0 ? this.sel.isSubsetOf(tags[name]) : true,
    )
    return ([
      [true, nameParts.get(true) ?? []],
      [false, nameParts.get(false) ?? []],
    ] as const).flatMap(([isSel, names]) => names.map(name => [name, isSel] as const))
  })
}
