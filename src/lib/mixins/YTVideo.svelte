<script>
  import Video from './Video.svelte'

  export let title
  export let a
  export let aspect = 'video'
</script>

<Video {aspect}>
  <iframe
    class="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    data-src={`https://youtube.com/embed/${a}`}
    frameborder="0"
    full
    {title}
  />
</Video>
