<script>
  import me from '../media/me.svg?raw'
  import { browser } from '$app/environment'

  let lines
  let colors = [
    'stroke-red-500',
    'stroke-cyan-500',
    'stroke-pink-500',
    'stroke-teal-500',
    'stroke-yellow-500',
  ]

  if (browser) {
    lines = new DOMParser()
      .parseFromString(me, 'image/svg+xml')
      .getElementById('lines')
    console.log(lines)

    for (let line of lines.childNodes) {
      line.classList.add(
        'fill-transparent',
        'stroke-1',
        colors[0 | (Math.random() * colors.length)]
      )
    }
  }
</script>

<svg viewBox="0 0 1587 1080" {...$$props}>
  {#if lines}
    {@html lines.outerHTML}
  {/if}
</svg>
