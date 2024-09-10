<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'

  import { SvgEl } from '.'

  import me from '$lib/js/me'

  interface Props extends HTMLAttributes<SVGElement> {
    scale: number
    splash_rel: {
      x: number
      y: number
    }
  }

  const { scale, splash_rel, ...rest }: Props = $props()
</script>

<svg
  style:--un-scale-x={scale}
  style:--un-scale-y={scale}
  style:--t-x='{splash_rel.x}%'
  style:--un-translate-y='{splash_rel.y}%'
  viewBox='0 0 1587 1080'
  {...rest}
>
  {#each me as el}
    <SvgEl {el} />
  {/each}
</svg>
