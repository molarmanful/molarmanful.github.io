<script lang='ts'>
  import CoverImg from '$lib/components/CoverImg.svelte'
  import { tags } from '$lib/states'
  import { items } from '$lib/ts/meta'
  import { flip } from 'svelte/animate'
  import { prefersReducedMotion } from 'svelte/motion'
  import { fade } from 'svelte/transition'

  const { sel, able, sorted, nameSel } = $derived(tags)
</script>

<section
  class='
    relative bg-bg bg-linear-to-b p-5 pt-0!
    xl:p-8
  '
>
  <p
    class='
      mb-2 font-bold text-bord-400
      xl:mb-3
      noscript:hidden
    '
  >
    FILTER BY TAG:
  </p>

  <ul
    class='
      mb-5 flex flex-wrap gap-2
      xl:mb-8 xl:gap-3
      noscript:hidden
    '
  >
    {#if sel.size > 0}
      <li in:fade={{ duration: 150 }}>
        <button
          class='
            cursor-pointer border border-current px-2 py-1 text-accent-400
            transition
            [:hover,:focus]:text-accent-200
          '
          onclick={() => {
            sel.clear()
          }}
        >
          CLEAR
        </button>
      </li>
    {/if}

    {#each sorted as tag (tag)}
      {@const isSel = sel.has(tag)}
      {@const isAble = able.has(tag)}
      {@const disabled = !isSel && !isAble}
      <li
        aria-hidden={disabled}
        animate:flip={{ duration: prefersReducedMotion.current ? 0 : 150 }}
      >
        <button
          class={[
            'cursor-pointer border border-current px-2 py-1 transition',
            isSel
              ? `
                text-head-400
                [:hover,:focus]:text-head-200
              `
              : `
                text-bord-400
                [:hover,:focus]:text-bord-200
              `,
            disabled && 'pointer-events-none opacity-50',
          ]}
          {disabled}
          onclick={({ currentTarget }) => {
            if (isSel) sel.delete(tag)
            else sel.add(tag)
            currentTarget.blur()
          }}
        >
          {tag}
        </button>
      </li>
    {/each}
  </ul>

  <ul
    class='
      mx-auto grid grid-cols-1 gap-3
      xs:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:gap-5
      [&:has(a:focus)_a]:opacity-50 [&:has(a:hover)_a]:media-hover:opacity-50
    '
  >
    {#each nameSel as [name, isSel] (name)}
      {@const { title } = items[name]}
      <li
        class='flex'
        animate:flip={{
          duration: prefersReducedMotion.current ? 0 : 300,
          delay: prefersReducedMotion.current ? 0 : 50,
        }}
      >
        <a
          class={[
            `
              group relative border border-transparent transition
              hover:border-bord-400 hover:opacity-100!
              focus:border-bord-400 focus:opacity-100!
              [.pointer-events-none]:opacity-25!
            `,
            isSel || 'pointer-events-none',
          ]}
          aria-disabled={!isSel}
          aria-label={title}
          href={isSel ? `/work/${name}` : void 0}
        >
          <div
            class='
              pointer-events-none absolute bottom-full w-full bg-bg p-2
              text-accent-400 opacity-0 outline outline-bord-400 transition
              group-hover:translate-y-0 group-hover:opacity-100
              group-focus:translate-y-0 group-focus:opacity-100
              motion-safe:translate-y-1/2
              xl:p-3
            '
            aria-hidden={true}
          >
            {title}
          </div>
          <CoverImg {name} aria-hidden />
        </a>
      </li>
    {/each}
  </ul>
</section>
