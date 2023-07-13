<script>
  export let bold
</script>

<p
  text="xl md:2xl lg:4xl gray-300"
  font-extralight={bold ? void 0 : ''}
  {bold}
  {...$$props}
>
  <slot />
</p>
