<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  const { clazz, children, ...rest }: HTMLAttributes<HTMLHeadingElement> & {
    clazz?: string
    children?: Snippet
  } = $props()
</script>

<p
  class={[
    `
      text-2xl font-normal text-text-200
      md:text-3xl
    `,
    clazz,
  ]}
  {...rest}
>
  {@render children?.()}
</p>
