<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'
  import { scale } from 'svelte/transition'

  import { FocusTrap } from '$lib/js/util.svelte'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    tops: string[]
    GOTO: (s: string) => (e: Event) => void
    clazz?: string
  }

  const {
    tops = [],
    GOTO,
    clazz = '',
    ...rest
  }: Props = $props()

  const { useFocusTrap } = new FocusTrap({
    immediate: true,
    initialFocus: false,
  }).fns
</script>

<div
  class='{0} origin-top-right b-(1 current) bg-black p-4 text-bord {clazz}'
  data-breathe
  role='navigation'
  use:useFocusTrap
  transition:scale={{ duration: 300 }}
  {...rest}
>
  <menu class='text-3xl leading-8 font-1'>
    {#each tops as top}
      <li>
        <button
          style:transition='border-color 400ms, filter 400ms'
          class='b-(b-1 transparent) bg-transparent text-bord color-inherit outline-none ease [&:hover,&:focus]:b-white [&:hover,&:focus]:fake-white'
          onclick={GOTO(top)}
        >
          {top.toUpperCase()}
        </button>
      </li>
    {/each}
  </menu>
</div>
