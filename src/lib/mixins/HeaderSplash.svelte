<script>
  import { SvgEl } from '.'
  import me from '../js/me'

  let colors = [
    'stroke-pink-500',
    'stroke-red-500',
    'stroke-yellow-500',
    'stroke-teal-500',
    'stroke-cyan-500',
    'stroke-purple-500',
  ]
</script>

<svg viewBox="0 0 1587 1080" {...$$restProps}>
  {#each me as el}
    <SvgEl name={el.this} {colors} {...el.attr} />
  {/each}
</svg>
