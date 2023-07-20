<script>
  export let href
  export let t = void 0
</script>

<a
  underline
  decoration-1
  decoration-offset="[.25rem]"
  {href}
  target={t ? void 0 : '_blank'}
  {...$$restProps}><slot /></a
>
