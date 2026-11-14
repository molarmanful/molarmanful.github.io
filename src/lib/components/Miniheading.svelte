<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  const { class: clazz, children, ...rest }:
    & HTMLAttributes<HTMLHeadingElement>
    & {
      class?: string
      children?: Snippet
    } = $props()
</script>

<h2
  class={[
    `
      mt-3
      xl:mt-5
    `,
    clazz,
  ]}
  {...rest}
>
  {@render children?.()}
</h2>
