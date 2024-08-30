<script lang='ts'>
  import type { HTMLButtonAttributes } from 'svelte/elements'

  import { cD } from '../js/contexts'

  interface Props extends HTMLButtonAttributes {
    pulse: number
    colors: string[]
    clazz?: string
  }

  const { pulse, colors, clazz, ...props }: Props = $props()

  const { loaded } = cD.get()
</script>

<button
  style:transition='color {pulse || 100}ms, border-color 400ms, transform {pulse / 5 || 100}ms'
  style:color={colors[0]}
  class="{loaded.x ? 'translate-x-0' : 'translate-x-17'} b-(1 current) focus:b-white bg-black h-16 w-16 outline-none text-bord focus:var_x-white {clazz}"
  aria-label='nav menu'
  {...props}
>
  <svg class='m-auto h-1/2 w-1/2' viewBox='0 0 5 5'>
    {#each Array(3).keys() as i}
      <rect
        style:transition='color {pulse - 100 || 100}ms, fill 400ms'
        style:color={colors[i + 1]}
        fill='var(--x, currentColor)'
        height='1'
        width='5'
        y={i * 2}
      ></rect>
    {/each}
  </svg>
  <span class='sr-only'>Open menu</span>
</button>
