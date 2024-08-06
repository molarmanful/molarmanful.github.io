<script>
  let { children, ...props } = $props()
</script>

<div fixed h-18 inset-x-0 p="2 b-0" top-0 z-10>
  <div
    bg="black"
    border="1 current"
    flex="~ row"
    full=""
    text="gray-500"
    {...props}
  >
    {@render children()}
  </div>
</div>
