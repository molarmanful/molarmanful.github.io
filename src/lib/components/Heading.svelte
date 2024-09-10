<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import { cD } from '$lib/js/contexts'

  type Props = HTMLAttributes<HTMLHeadingElement> & Aos.Props & {
    clazz?: string
    children: Snippet
  }

  const { aoso = { on: false }, clazz = '', children, ...rest }: Props = $props()
  const { aos } = cD.get()
</script>

<h1 class='{0} text-(head stroked) uppercase hyphens-manual type-7 {clazz}' use:aos={aoso} {...rest}>
  {@render children()}
</h1>
