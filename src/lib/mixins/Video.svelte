<script>
  export let aspect = 'video'
</script>

<div max-full mx-auto m="t-6 md:t-8" {aspect}>
  <slot />
</div>

<div hidden aspect="video portrait square" />
