<script>
  import { Video } from '.'

  const { title, a, aspect = 'video' } = $props()
</script>

<Video {aspect}>
  <iframe
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowfullscreen
    frameborder='0'
    full
    loading='lazy'
    src={`https://youtube.com/embed/${a}`}
    {title}
  ></iframe>
</Video>
