<script>
  import Img from '@zerodevx/svelte-img'

  const { name, b, x = false, mt, ...props } = $props()

  let loaded = $state(false)
</script>

<Img
  class="{loaded ? 'loaded' : ''} laz"
  alt={name}
  bg='contain!'
  image-render='quality'
  m="x-auto {mt ? 't-0' : 't-6 md:t-8'}"
  max-h='full'
  object='contain'
  onload={() => {
    loaded = true
  }}
  src={x ? b : b.get(name)}
  text='0'
  w='full'
  {...props}
/>
