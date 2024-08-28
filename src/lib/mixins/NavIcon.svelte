<script>
  import { getContext } from 'svelte'

  const { pulse, filter, color, ...props } = $props()

  const { loaded } = getContext('D')
</script>

<button
  style:transition='color {pulse || 100}ms, border-color 400ms, transform {pulse / 5 || 100}ms'
  style:filter
  style:color
  class={loaded.x ? 'translate-x-0' : 'translate-x-17'}
  aria-label='nav menu'
  b='1 current focus:white'
  bg='black'
  h='16'
  outline='none'
  text='bord'
  var_x='focus:white'
  w='16'
  {...props}
>
  <svg alt='menu' h='1/2' m-auto viewBox='0 0 5 5' w='1/2'>
    {#each Array(3).keys() as i}
      <rect
        style:transition='color {pulse / 4 || 100}ms {(pulse / 4) * (i + 1)}ms, fill 400ms'
        style:color
        fill='var(--x, currentColor)'
        height='1'
        width='5'
        y={i * 2}
      ></rect>
    {/each}
  </svg>
</button>
