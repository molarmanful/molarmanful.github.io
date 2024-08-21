<script>
  const { children, ...props } = $props()
</script>

<div
  max-w="prose"
  mx="auto"
  p="t-8 b-6 md:t-16 lg:b-12"
  prose=""
  w="full"
  {...props}
>
  {@render children()}
</div>
