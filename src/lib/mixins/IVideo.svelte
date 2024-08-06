<script>
  import { Video } from '.'

  let { a, aspect = 'square' } = $props()
</script>

<Video {aspect}>
  <div class="aspect-{aspect}" max-full mx-auto>
    <video autoplay full loading="lazy" loop muted object-contain playsinline>
      <source src={`https://i.imgur.com/${a}.mp4`} type="video/mp4" />
    </video>
  </div>
</Video>
