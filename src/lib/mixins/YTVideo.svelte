<script lang='ts'>
  import { Video } from '.'

  interface Props {
    title?: string
    a: string
    aspect?: string
  }

  const { title, a, aspect = 'video' }: Props = $props()
</script>

<Video {aspect}>
  <iframe
    class='full'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowfullscreen
    frameborder='0'
    loading='lazy'
    src={`https://youtube.com/embed/${a}`}
    {title}
  ></iframe>
</Video>
