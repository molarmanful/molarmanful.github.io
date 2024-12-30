<script lang='ts'>
  import type { HTMLButtonAttributes } from 'svelte/elements'

  import { cD } from '$lib/js/contexts'
  import gsap from 'gsap'

  interface Props extends HTMLButtonAttributes {
    clazz?: string
  }

  const { clazz, ...rest }: Props = $props()

  const { loaded } = cD.get()

  const slide = (node: Element) => {
    gsap.set(node, { x: '17rem' })

    $effect(() => {
      if (!loaded.x)
        return
      gsap.to(node, { x: 0, duration: 0.4 })
    })
  }
</script>

<button
  style:transition='border-color 400ms'
  class='h-16 w-16 b-(1 current) bg-black text-bord outline-none focus:b-white focus:var_x-white {clazz}'
  aria-label='nav menu'
  data-breathe
  use:slide
  {...rest}
>
  <svg class='m-auto h-1/2 w-1/2' viewBox='0 0 5 5'>
    {#each Array.from({ length: 3 }).keys() as i}
      <rect
        style:transition='fill 400ms'
        data-breathe-a
        fill='var(--x, currentColor)'
        height='1'
        width='5'
        y={i * 2}
      ></rect>
    {/each}
  </svg>
  <span class='sr-only'>Open menu</span>
</button>
