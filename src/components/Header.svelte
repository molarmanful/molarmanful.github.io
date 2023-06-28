<script>
  import { onMount } from 'svelte'
  import me from '../media/me.svg'
  import lev from '../js/lev'

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

<header relative screen id="top">
  <div fixed flex full>
    <svg
      absolute
      bottom-0
      right-0
      max-w-full
      max-h="1/2 xl:3/4"
      viewBox="0 0 1587 1080"
    >
      <use
        text-gray-500
        stroke-current
        bottom-0
        fill-transparent
        href={me + '#lines'}
      />
    </svg>
    <div m-auto z-10 h="1/4 md:1/3" w="lg:3/4">
      <h1 aberration text="6xl lg:9xl stroked stroked-white">BEN PANG</h1>
      <small text="xl lg:3xl gray-200" font-extralight block ml="1 lg:2">
        I make
        <br class="lg:hidden" />
        <div inline-flex align-top transition duration-500 whitespace-pre bold>
          {word}
        </div>
        <br class="lg:hidden" />
        things
        <br class="lg:hidden" />
        happen.
      </small>
    </div>
  </div>
</header>
