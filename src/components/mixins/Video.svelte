<script>
  export let x = false
</script>

<div max-h-screen w={`full ${x ? '' : 'md:1/2'}`} mx-auto {...$$props}>
  <div aspect-video>
    <slot />
  </div>
</div>
