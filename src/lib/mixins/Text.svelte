<script>
  let { children, ...props } = $props()
</script>

<p mt="4 lg:8" {...props}>
  {@render children()}
</p>
