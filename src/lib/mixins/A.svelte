<script>
  export let href
  export let t = void 0
  export let item = false
  let clazz = ''
  export { clazz as class }
</script>

<a
  class="{item ? 'text-inherit hover:text-white' : void 0} {clazz}"
  decoration-1
  decoration-offset="[.25rem]"
  {href}
  target={t ? void 0 : '_blank'}
  underline
  {...$$restProps}
>
  <slot />
</a>
