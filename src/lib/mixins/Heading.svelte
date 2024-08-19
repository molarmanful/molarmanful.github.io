<script>
  let { children, ...props } = $props()
</script>

<h1 hyphens="manual" text="stroked gray-400" type="7" uppercase="" {...props}>
  {@render children()}
</h1>
