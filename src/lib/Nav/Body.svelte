<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'

  import { FocusTrap } from '$lib/js/util.svelte'
  import { scale } from 'svelte/transition'

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
  class='origin-top-right b-(1 current) bg-black p-4 text-bord {clazz}'
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
          class='b-(b-1 transparent) bg-transparent text-bord outline-none ease [&:hover,&:focus]:b-white [&:hover,&:focus]:fake-white'
          onclick={GOTO(top)}
        >
          {top.toUpperCase()}
        </button>
      </li>
    {/each}
  </menu>
</div>
