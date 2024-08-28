<script>
  import { Video } from '.'

  const {
    a,
    px,
    aspect = 'square',
    q = 'autoplay=true&loop=true&muted=true&preload=true&responsive=true&playsinline=true',
  } = $props()
</script>

<Video {aspect}>
  <div class='aspect-{aspect}' max-full mx-auto>
    <iframe
      class={px ? 'image-render-pixel' : ''}
      allow='autoplay;'
      full
      loading='lazy'
      object-contain
      src='https://iframe.mediadelivery.net/embed/296935/{a}?{q}'
      title=""
    ></iframe>
  </div>
</Video>
