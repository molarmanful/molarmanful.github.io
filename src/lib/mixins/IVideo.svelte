<script>
  import Video from './Video.svelte'

  export let a
  export let aspect = 'square'
</script>

<Video {aspect}>
  <div max-full mx-auto mt-8 {aspect}>
    <video class="lazy" full object-contain autoplay loop muted playsinline>
      <source type="video/mp4" data-src={`https://i.imgur.com/${a}.mp4`} />
    </video>
  </div>
</Video>
