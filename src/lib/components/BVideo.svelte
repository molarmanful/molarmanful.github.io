<script lang='ts'>
  import { Video } from '.'

  interface Props {
    a: string
    px?: boolean
    aspect?: string
    q?: string
  }

  const {
    a,
    px,
    aspect = 'square',
    q = 'autoplay=true&loop=true&muted=true&preload=true&responsive=true&playsinline=true',
  }: Props = $props()
</script>

<Video {aspect}>
  <div class='mx-auto max-full {`aspect-${aspect}`}'>
    <iframe
      class="full object-contain {px ? 'image-render-pixel' : ''}"
      allow='autoplay;'
      loading='lazy'
      src='https://iframe.mediadelivery.net/embed/296935/{a}?{q}'
      title=""
    ></iframe>
  </div>
</Video>
