<svelte:options namespace="svg" />

<script>
  import { writable } from 'svelte/store'

  export let D
  export let name

  let color = ''
  let d = 3000
  let ts = writable(d)

  D.randt(_ => {
    color = D.randc(500)
  }, ts)

  ts.subscribe(t => {
    d = t
  })
</script>

<svelte:element
  this={name}
  {...$$restProps}
  class="fill-transparent transition-color stroke-1 stroke-current {color}"
  style:transition-duration="{d}ms"
/>
