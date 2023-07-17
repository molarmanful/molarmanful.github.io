<script>
  import Video from './Video.svelte'

  export let title
  export let a
  export let aspect = 'video'
</script>

<Video {aspect}>
  <iframe
    class="lazy"
    data-src={`https://youtube.com/embed/${a}`}
    full
    {title}
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</Video>
