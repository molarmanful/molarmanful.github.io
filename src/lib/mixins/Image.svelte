<script>
  export let name
  export let x = false
  export let a
  export let b
  export let mt = void 0
</script>

<img
  class="lazy"
  w-full
  max-h-full
  m="x-auto {mt ? 't-0' : 't-4 md:t-8'}"
  object-contain
  alt={name}
  src={x ? a : a.get(name)}
  data-src={x ? b : b.get(name)}
  {...$$props}
/>
