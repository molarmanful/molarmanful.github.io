<script>
  export let name
  export let x = false
  export let a
  export let b
  export let mb = 8
</script>

<img
  class="lazy"
  m-auto
  w-full
  max-h-full
  {mb}
  object-contain
  alt={name}
  src={x ? a : a.get(name)}
  data-src={x ? b : b.get(name)}
  {...$$props}
/>

<div hidden mb="0 8" />
