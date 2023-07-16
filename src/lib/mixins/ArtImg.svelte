<script>
  import { Image } from '.'

  export let D
  export let name
</script>

<Image {name} a={D.art_tiny} b={D.art} {...$$props} />
