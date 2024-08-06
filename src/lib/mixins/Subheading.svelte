<script>
  let { bold, children, ...props } = $props()
</script>

<h2
  class={bold ? 'bold' : 'font-200'}
  case="normal"
  font="2"
  m="t-6 lg:t-12"
  text=" gray-300"
  type="5"
  {...props}
>
  {@render children()}
</h2>
