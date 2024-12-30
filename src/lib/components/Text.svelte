<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import { cD } from '$lib/js/contexts'

  type Props = HTMLAttributes<HTMLParagraphElement> & Aos.Props & {
    clazz?: string
    children: Snippet
  }

  const { clazz = '', aoso = { on: false }, children, ...rest }: Props = $props()
  const { aos } = cD.get()
</script>

<p class='mt-4 lg:mt-8 {clazz}' use:aos={aoso} {...rest}>
  {@render children()}
</p>
