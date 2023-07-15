<script>
  import { Image } from '.'

  export let name
  export let tiny
  export let old
</script>

<Image alt={name} src={tiny.get(name)} data-src={old.get(name)} />
