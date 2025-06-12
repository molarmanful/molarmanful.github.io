<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAnchorAttributes } from 'svelte/elements'

  interface Props extends HTMLAnchorAttributes {
    t?: boolean
    item?: boolean
    clazz?: string
    children: Snippet
  }

  const { t, item = false, clazz = '', children, ...rest }: Props = $props()
</script>

<a
  class='underline {clazz}'
  class:text-inherit={item}
  target={t ? void 0 : '_blank'}
  {...rest}
>
  {@render children()}
</a>
