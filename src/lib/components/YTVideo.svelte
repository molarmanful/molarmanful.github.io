<script lang='ts'>
  import type { ComponentProps } from 'svelte'

  import Video from './Video.svelte'

  const { title, a, class: clazz = 'aspect-video' }:
    & ComponentProps<typeof Video>
    & {
      title?: string
      a: string
    } = $props()
</script>

<Video class={clazz}>
  <iframe
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowfullscreen
    frameborder='0'
    loading='lazy'
    src={`https://youtube.com/embed/${a}`}
    {title}
  ></iframe>
</Video>
