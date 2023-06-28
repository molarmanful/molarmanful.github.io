<script>
  import { Video } from '.'

  export let x = false
  export let title
  export let a
</script>

<Video {x} {...$$props}>
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
