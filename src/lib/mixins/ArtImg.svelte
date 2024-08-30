<script>
  import { cD } from '../js/contexts'

  import { Image } from '.'

  const { name, ...props } = $props()
  const { D } = cD.get()
</script>

<Image {name} b={D.art} {...props} />
