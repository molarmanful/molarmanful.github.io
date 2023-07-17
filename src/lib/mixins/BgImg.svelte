<script>
  export let D
  export let a
  export let name
</script>

<img
  alt={name}
  fixed
  full
  object="center cover"
  draggable="false"
  src={D[a + '_tiny'].get(name)}
  data-src={D[a].get(name)}
  class="lazy"
  opacity-50
  blur
/>
