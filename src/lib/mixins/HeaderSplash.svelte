<script>
  import me from '../js/me'

  import { SvgEl } from '.'

  const { scale, splash_rel, ...props } = $props()
</script>

<svg
  style:--un-scale-x={scale}
  style:--un-scale-y={scale}
  style:--t-x='{splash_rel.x}%'
  style:--un-translate-y='{splash_rel.y}%'
  viewBox='0 0 1587 1080'
  {...props}
>
  {#each me as el}
    <SvgEl name={el.this} len={el.len} {...el.attr} />
  {/each}
</svg>
