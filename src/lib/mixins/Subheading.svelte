<script>
  export let bold = void 0
</script>

<h2
  type-5
  case="normal"
  font="2"
  text=" gray-300"
  m="t-6 lg:t-12"
  class={bold ? 'bold' : 'font-200'}
  {...$$restProps}
>
  <slot />
</h2>
