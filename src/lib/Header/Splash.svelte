<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'

  import { SvgEl } from '.'

  import me from '$lib/js/me'

  interface Props extends HTMLAttributes<SVGElement> {
    clazz?: string
  }

  const { clazz = '', ...rest }: Props = $props()
</script>

<svg class='{0} h-full {clazz}' viewBox='0 0 1587 1080' {...rest}>
  {#each me as el}
    <SvgEl {el} />
  {/each}
</svg>
