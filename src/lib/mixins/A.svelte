<script>
  export let href
</script>

<a
  underline
  decoration-1
  decoration-offset="[.25rem]"
  {href}
  target="_blank"
  {...$$props}><slot /></a
>
