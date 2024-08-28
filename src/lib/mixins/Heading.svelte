<script>
  const { children, ...props } = $props()
</script>

<h1 hyphens='manual' text='stroked head' type='7' uppercase="" {...props}>
  {@render children()}
</h1>
