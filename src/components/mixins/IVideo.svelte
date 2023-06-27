<script>
  export let a
</script>

<div h-screen w-full mx-auto mt-8>
  <video
    class="lazy"
    full
    object-contain
    data-src={`https://i.imgur.com/${a}.mp4`}
    autoplay
    loop
    muted
    playsinline
  >
    <source type="video/mp4" data-src={`https://i.imgur.com/${a}.mp4`} />
  </video>
</div>
