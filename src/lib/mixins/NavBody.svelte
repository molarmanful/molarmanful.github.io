<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'
  import { scale } from 'svelte/transition'

  import { FocusTrap } from '../js/util.svelte'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    tops: string[]
    GOTO: (s: string) => (e: Event) => void
    pulse: number
    color: string
    clazz?: string
  }

  const {
    tops = [],
    GOTO,
    pulse,
    color,
    clazz = '',
    ...props
  }: Props = $props()

  const { useFocusTrap } = new FocusTrap({
    immediate: true,
    initialFocus: false,
  }).fns
</script>

<div
  style:transition-duration='{pulse}ms'
  style:color
  class='{0} origin-top-right b-(1 current) bg-black p-4 text-bord transition-color {clazz}'
  role='navigation'
  use:useFocusTrap
  transition:scale={{ duration: 300 }}
  {...props}
>
  <menu class='text-3xl leading-8 font-1'>
    {#each tops as top}
      <li>
        <button
          style:transition='color {pulse || 100}ms, border-color 400ms, filter
            400ms'
          style:color
          class='b-(b-1 transparent) bg-transparent text-bord outline-none ease [&:hover,&:focus]:b-white [&:hover,&:focus]:fake-white'
          onclick={GOTO(top)}
        >
          {top.toUpperCase()}
        </button>
      </li>
    {/each}
  </menu>
</div>
