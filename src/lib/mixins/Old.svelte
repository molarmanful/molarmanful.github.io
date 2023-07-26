<script>
  import { Image } from '.'

  export let name, tiny, old
</script>

<Image alt={name} data-src={old.get(name)} src={tiny.get(name)} />
