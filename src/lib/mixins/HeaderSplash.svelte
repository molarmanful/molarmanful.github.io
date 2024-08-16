<script>
  import me from '../js/me'
  import { redmote, sfactor } from '../js/util.svelte'

  import { SvgEl } from '.'

  let { ...props } = $props()

  let factor = $state(0)
  sfactor(x => (factor = x))

  const rm = redmote()
</script>

<svg
  style:transform={rm ? `scale(${1 + 0.1 * Math.min(1, factor)})` : void 0}
  viewBox="0 0 1587 1080"
  {...props}
>
  {#each me as el}
    <SvgEl name={el.this} len={el.len} {...el.attr} />
  {/each}
</svg>
