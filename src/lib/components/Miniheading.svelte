<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  type Props = HTMLAttributes<HTMLHeadingElement> & {
    class?: string
    children: Snippet
  }

  const { class: clazz = '', children, ...rest }: Props = $props()
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
  {@render children()}
</h2>
