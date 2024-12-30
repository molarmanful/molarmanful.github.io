<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'

  import me from '$lib/js/me'

  import { SvgEl } from '.'

  interface Props extends HTMLAttributes<SVGElement> {
    clazz?: string
  }

  const { clazz = '', ...rest }: Props = $props()
</script>

<svg class='h-full {clazz}' viewBox='0 0 1587 1080' {...rest}>
  {#each me as el}
    <SvgEl {el} />
  {/each}
</svg>
