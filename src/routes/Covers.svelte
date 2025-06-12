<script lang='ts'>
  import CoverImg from '$lib/components/CoverImg.svelte'
  import { covers, items, tags, tagsSet } from '$lib/ts/meta'
  import { flip } from 'svelte/animate'
  import { prefersReducedMotion } from 'svelte/motion'
  import { SvelteSet } from 'svelte/reactivity'
  import { fade } from 'svelte/transition'

  const selTagsSet = new SvelteSet<string>()

  const ableTagsSet = $derived(
    selTagsSet.size
      ? new Set([
        ...tags.values().reduce((a, b) => selTagsSet.isSubsetOf(b) ? a.union(b) : a, new Set()),
      ].sort())
      : tagsSet,
  )

  const sortedTags = $derived([...selTagsSet, ...ableTagsSet.difference(selTagsSet), ...tagsSet.difference(ableTagsSet)])

  const nameSel = $derived.by(() => {
    const nameParts = Map.groupBy(
      covers[0].keys(),
      name => selTagsSet.size ? selTagsSet.isSubsetOf(tags.get(name)!) : true,
    )
    return ([
      [true, nameParts.get(true) ?? []],
      [false, nameParts.get(false) ?? []],
    ] as const).flatMap(([isSel, names]) => names.map(name => [name, isSel] as const))
  })
</script>

<section class='p-5 bg-black relative bg-linear-to-b xl:p-8 pt-0!'>
  <p class='script text-bord font-bold mb-2 xl:mb-3'>FILTER BY TAG:</p>

  <ul class='script mb-5 flex flex-wrap gap-2 xl:(mb-8 gap-3)'>
    {#if selTagsSet.size}
      <li in:fade={{ duration: 150 }}>
        <button
          class='text-accent px-2 py-1 b b-current cursor-pointer transition [&:is(:hover,:focus)]:text-accent-200'
          onclick={() => selTagsSet.clear()}
        >CLEAR</button>
      </li>
    {/if}

    {#each sortedTags as tag (tag)}
      {@const isSel = selTagsSet.has(tag)}
      {@const isAble = ableTagsSet.has(tag)}
      {@const disabled = !isSel && !isAble}
      <li
        class:will-change-transform={!prefersReducedMotion.current}
        aria-hidden={disabled}
        animate:flip={{ duration: prefersReducedMotion.current ? 0 : 150 }}
      >
        <button
          class='px-2 py-1 b b-current cursor-pointer transition {isSel ? 'text-head [&:is(:hover,:focus)]:text-head-200' : 'text-bord [&:is(:hover,:focus)]:text-bord-200'}'
          class:opacity-50={disabled}
          class:pointer-events-none={disabled}
          {disabled}
          onclick={({ currentTarget }) => {
            if (isSel)
              selTagsSet.delete(tag)
            else selTagsSet.add(tag)
            currentTarget.blur()
          }}
        >{tag}</button>
      </li>
    {/each}
  </ul>

  <ul class='mx-auto gap-3 grid cols-1 [&_a:is(:hover,:focus)]:(b-bord opacity-100!) [&:has(:hover,:focus)_a]:opacity-50 xl:gap-5 lg:cols-4 md:cols-3 xs:cols-2 [&_a.pointer-events-none]:opacity-25!'>
    {#each nameSel as [name, isSel] (name)}
      {@const { title } = items.get(name)!}
      <li
        class='flex'
        class:will-change-transform={!prefersReducedMotion.current}
        animate:flip={{ duration: prefersReducedMotion.current ? 0 : 300, delay: prefersReducedMotion.current ? 0 : 50 }}
      >
        <a
          class='b b-transparent transition relative'
          class:pointer-events-none={!isSel}
          aria-disabled={!isSel}
          href={isSel ? `/work/${name}` : void 0}
        >
          <span class='text-accent p-2 outline-bord outline bg-black opacity-0 w-full pointer-events-none transition bottom-full absolute xl:p-3 [:is(:hover,:focus)>&]:(opacity-100 translate-y-0) motion-safe:translate-y-1/2'>
            {title}
          </span>
          <CoverImg {name} aria-hidden />
        </a>
      </li>
    {/each}
  </ul>
</section>
