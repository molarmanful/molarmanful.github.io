<script>
  export let bold = void 0
</script>

<p
  text="xl md:2xl lg:4xl gray-300"
  font-200={bold ? void 0 : ''}
  {bold}
  {...$$props}
>
  <slot />
</p>
