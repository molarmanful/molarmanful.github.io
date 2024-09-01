<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAnchorAttributes } from 'svelte/elements'

  interface Props extends HTMLAnchorAttributes {
    t?: boolean
    item?: boolean
    clazz?: string
    children: Snippet
  }

  const { t, item = false, clazz = '', children, ...props }: Props = $props()
</script>

<a
  class="{item ? 'text-inherit' : ''} under focunder {clazz}"
  target={t ? void 0 : '_blank'}
  {...props}
>
  {@render children()}
</a>
