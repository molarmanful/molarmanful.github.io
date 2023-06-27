<script>
  export let name
  export let x = false
  export let a
  export let b
</script>

<img
  class="lazy"
  m-auto
  w-full
  max-h-screen
  mb-8
  object-contain
  alt={name}
  src={x ? a : a.get(name)}
  data-src={x ? b : b.get(name)}
  {...$$props}
/>
