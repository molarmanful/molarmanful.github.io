<script>
  let {
    href,
    t,
    item = false,
    class: clazz = '',
    children,
    ...props
  } = $props()
</script>

<a
  class="{item ? 'text-inherit focunder' : ''} {clazz}"
  {href}
  target={t ? void 0 : '_blank'}
  under=""
  {...props}
>
  {@render children()}
</a>
