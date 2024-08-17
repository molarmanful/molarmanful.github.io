<script>
  import me from '../js/me'
  import { redmote, sfactor } from '../js/util.svelte'

  import { SvgEl } from '.'

  let { ...props } = $props()

  let factor = $state(0)
  const rm = redmote()
  const scale = $derived(rm ? 1 + 0.1 * Math.min(1, factor) : void 0)
  sfactor(x => (factor = x))
</script>

<svg
  style:--un-scale-x={scale}
  style:--un-scale-y={scale}
  un-transform=""
  viewBox="0 0 1587 1080"
  {...props}
>
  {#each me as el}
    <SvgEl name={el.this} len={el.len} {...el.attr} />
  {/each}
</svg>
