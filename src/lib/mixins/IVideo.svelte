<script>
  import Video from './Video.svelte'

  export let a
  export let aspect = 'square'
</script>

<Video {aspect}>
  <div {aspect} max-full mt-8 mx-auto>
    <video class="lazy" autoplay full loop muted object-contain playsinline>
      <source data-src={`https://i.imgur.com/${a}.mp4`} type="video/mp4" />
    </video>
  </div>
</Video>
