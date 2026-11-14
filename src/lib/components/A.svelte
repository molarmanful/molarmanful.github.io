<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { ClassValue, HTMLAnchorAttributes } from 'svelte/elements'

  const { t, item = false, class: clazz, children, ...rest }:
    & HTMLAnchorAttributes
    & {
      t?: boolean
      item?: boolean
      class?: ClassValue
      children?: Snippet
    } = $props()
</script>

<a
  class={['underline', item && 'text-inherit', clazz]}
  rel={t ? void 0 : 'noopener noreferrer'}
  target={t ? void 0 : '_blank'}
  {...rest}
>
  {@render children?.()}
</a>
