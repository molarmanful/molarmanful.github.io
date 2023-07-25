<script>
  import { Image } from '.'

  export let name
  export let tiny
  export let old
</script>

<Image alt={name} data-src={old.get(name)} src={tiny.get(name)} />
