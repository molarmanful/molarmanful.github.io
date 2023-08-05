<script>
  import { getContext } from 'svelte'

  import { lazy } from '../js/util'

  import { Video } from '.'

  let D = getContext('D')

  export let a
  export let aspect = 'square'
</script>

<Video {aspect}>
  <div class="aspect-{aspect}" max-full mx-auto>
    <video autoplay full loop muted object-contain playsinline use:lazy={{ D }}>
      <source data-src={`https://i.imgur.com/${a}.mp4`} type="video/mp4" />
    </video>
  </div>
</Video>
