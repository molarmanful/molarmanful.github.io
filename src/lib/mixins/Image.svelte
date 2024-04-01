<script>
  import Img from '@zerodevx/svelte-img'

  export let name, b
  export let x = false
  export let mt = void 0

  let loaded
</script>

<Img
  class="{loaded ? 'loaded' : ''} laz"
  alt={name}
  bg="contain!"
  image-render="quality"
  m="x-auto {mt ? 't-0' : 't-6 md:t-8'}"
  max-h="full"
  object="contain"
  src={x ? b : b.get(name)}
  text="0"
  w="full"
  on:load={() => {
    loaded = true
  }}
  {...$$restProps}
/>
