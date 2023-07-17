<script>
  export let name
  export let x = false
  export let a
  export let b
  export let mt = 8
</script>

<img
  class="lazy"
  m-auto
  w-full
  max-h-full
  {mt}
  object-contain
  alt={name}
  src={x ? a : a.get(name)}
  data-src={x ? b : b.get(name)}
  {...$$props}
/>

<div hidden mt="0 8" />
