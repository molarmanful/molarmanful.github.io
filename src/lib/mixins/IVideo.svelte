<script>
  import { Video } from '.'

  export let a
  export let aspect = 'square'
</script>

<Video {aspect}>
  <div class="aspect-{aspect}" max-full mx-auto>
    <video autoplay full loading="lazy" loop muted object-contain playsinline>
      <source data-src={`https://i.imgur.com/${a}.mp4`} type="video/mp4" />
    </video>
  </div>
</Video>
