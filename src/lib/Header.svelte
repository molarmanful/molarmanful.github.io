<script>
  import { onMount } from 'svelte'
  import { Subheading } from '$lib/mixins'
  import { browser } from '$app/environment'
  import { offtop } from './js/util'
  import me from './media/me.svg?raw'
  import lev from './js/lev'

  export let top = { name: 'top' }

  let bank = [
    'weird',
    'weird art',
    '2D art',
    '3D art',
    '4D art',
    'generative',
    'design',
    'experimental',
    'surreal',
    'wizard',
  ]
  let i = 0
  let word = bank[i]

  let update = n => {
    top.n = n
    top = top
  }

  let lines
  let colors = [
    'stroke-red-500',
    'stroke-cyan-500',
    'stroke-pink-500',
    'stroke-green-500',
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

  let scrollY
  let innerHeight

  $: factor = Math.max(0, scrollY / innerHeight)

  onMount(_ => {
    setInterval(_ => {
      word = bank[i]
      i = (i + 1) % bank.length
      let steps = lev(word, bank[i])
      let n = setInterval(_ => {
        if (steps.length) word = steps.pop()
        else clearInterval(n)
      }, 50)
    }, 1500)
  })
</script>

<svelte:window bind:scrollY bind:innerHeight />

<header relative screen use:offtop={{ update }}>
  <div fixed flex full style:filter="hue-rotate({factor * -69}deg)">
    <svg
      absolute
      bottom-0
      right="0 portrait:50%"
      un-transform="portrait:translate-x-1/2"
      mx-auto
      h="full xl:3/4"
      viewBox="0 0 1587 1080"
    >
      {#if lines}
        {@html lines.outerHTML}
      {/if}
    </svg>
    <div
      m="auto xl:(l-1/8 r-auto y-auto) 2xl:l-1/4"
      z-10
      h="xl:1/3"
      p-8
      backdrop="lt-xl:grayscale"
      bg="lt-xl:black/69"
      style:opacity={1 - factor * 2}
    >
      <h1 type-8 aberration text=" white">BEN PANG</h1>
      <Subheading text-gray="200" block m="t-4 l-1 lg:l-2">
        I make <span whitespace-pre bold>{word}</span> things.
      </Subheading>
    </div>
  </div>
</header>
