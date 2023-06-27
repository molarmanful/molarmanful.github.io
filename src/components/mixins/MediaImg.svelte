<script>
  import { Image } from '.'

  export let D
  export let name
</script>

<Image {name} a={D.media_tiny} b={D.media} {...$$props} />
