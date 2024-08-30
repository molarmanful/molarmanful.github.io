<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAnchorAttributes } from 'svelte/elements'

  interface Props extends HTMLAnchorAttributes {
    t?: boolean
    item?: boolean
    class?: string
    children: Snippet
  }

  const { t, item = false, class: clazz = '', children, ...props }: Props = $props()
</script>

<a
  class="{item ? 'text-inherit focunder' : ''} under {clazz}"
  target={t ? void 0 : '_blank'}
  {...props}
>
  {@render children()}
</a>
