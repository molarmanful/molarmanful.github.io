<script>
  let { bold, children, ...props } = $props()
</script>

<h2
  class={bold ? 'bold text-head' : 'font-200 text-text-300'}
  case="normal"
  font="2"
  mt="6 lg:12"
  type="5"
  {...props}
>
  {@render children()}
</h2>
