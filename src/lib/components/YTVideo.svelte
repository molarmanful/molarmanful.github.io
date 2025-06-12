<script lang='ts'>
  import Video from './Video.svelte'

  interface Props {
    title?: string
    a: string
    aspectClass?: string
  }

  const { title, a, aspectClass = 'aspect-video' }: Props = $props()
</script>

<Video {aspectClass}>
  <iframe
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowfullscreen
    frameborder='0'
    loading='lazy'
    src={`https://youtube.com/embed/${a}`}
    {title}
  ></iframe>
</Video>
