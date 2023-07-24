<script>
  import me from '../js/me'

  import { SvgEl } from '.'
</script>

<svg viewBox="0 0 1587 1080" {...$$restProps}>
  {#each me as el}
    <SvgEl name={el.this} {...el.attr} />
  {/each}
</svg>
