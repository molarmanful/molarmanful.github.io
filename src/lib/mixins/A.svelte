<script>
  export let href
  export let t = void 0
  export let item = false
  let clazz = ''
  export { clazz as class }
</script>

<a
  class="{item ? 'text-inherit focunder' : ''} {clazz}"
  {href}
  target={t ? void 0 : '_blank'}
  under
  {...$$restProps}
>
  <slot />
</a>
