<script>
  let { children, ...props } = $props()
</script>

<div fixed h-18 inset-x-0 p="2 b-0" top-0 z-10>
  <div b="1 current" bg="black" flex="~ row" full="" text="bord" {...props}>
    {@render children()}
  </div>
</div>
