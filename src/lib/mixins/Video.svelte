<script>
  export let aspect = 'video'
</script>

<div max-full mx-auto mt-8 {aspect}>
  <slot />
</div>

<div hidden aspect="video portrait square" />
