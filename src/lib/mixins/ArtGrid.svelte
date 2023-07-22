<script>
  export let D
</script>

<div
  grid="~ cols-1 sm:cols-2 md:cols-3 xl:cols-4"
  gap="5 md:8"
  {...$$restProps}
>
  <slot covers={D.covers} />
</div>
