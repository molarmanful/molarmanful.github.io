<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAnchorAttributes } from 'svelte/elements'

  interface Props extends HTMLAnchorAttributes {
    t?: boolean
    item?: boolean
    class?: string
    children: Snippet
  }

  const { t, item = false, class: clazz = '', children, ...rest }: Props =
    $props()
</script>

<a
  class={['underline', item && 'text-inherit', clazz]}
  target={t ? void 0 : '_blank'}
  {...rest}
>
  {@render children()}
</a>
