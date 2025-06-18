<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  type Props = HTMLAttributes<HTMLHeadingElement> & {
    clazz?: string
    children: Snippet
  }

  const { clazz = '', children, ...rest }: Props = $props()
</script>

<p
  class='text-2xl text-text-300 font-normal md:text-3xl {clazz}'
  {...rest}
>
  {@render children()}
</p>
