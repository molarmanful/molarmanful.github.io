<script>
  import { Video } from '.'

  export let title, a
  export let aspect = 'video'
</script>

<Video {aspect}>
  <iframe
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    frameborder="0"
    full
    loading="lazy"
    src={`https://youtube.com/embed/${a}`}
    {title}
  />
</Video>
