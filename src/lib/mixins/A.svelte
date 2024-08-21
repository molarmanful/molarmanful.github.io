<script>
  const { t, item = false, class: clazz = '', children, ...props } = $props()
</script>

<a
  class="{item ? 'text-inherit focunder' : ''} {clazz}"
  target={t ? void 0 : '_blank'}
  under=""
  {...props}
>
  {@render children()}
</a>
