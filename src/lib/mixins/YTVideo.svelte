<script>
  import { Video } from '.'

  export let title, a
  export let aspect = 'video'
</script>

<Video {aspect}>
  <iframe
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    data-src={`https://youtube.com/embed/${a}`}
    frameborder="0"
    full
    loading="lazy"
    {title}
  />
</Video>
