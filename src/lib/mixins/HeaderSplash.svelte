<script>
  import { SvgEl } from '.'
  import me from '../js/me'
</script>

<svg viewBox="0 0 1587 1080" {...$$restProps}>
  {#each me as el}
    <SvgEl name={el.this} {...el.attr} />
  {/each}
</svg>
