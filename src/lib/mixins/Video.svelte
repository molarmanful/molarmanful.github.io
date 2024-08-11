<script>
  let { aspect = 'video', children } = $props()
</script>

<div class="aspect-{aspect}" bg-gray-900 m="t-6 md:t-8" max-full mx-auto>
  {@render children()}
</div>
