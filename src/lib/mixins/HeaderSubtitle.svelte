<script>
  import { Subheading } from '$lib/mixins'
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
    'wizard',
  ]
  let i = 0
  let word = bank[i]

  setInterval(_ => {
    word = bank[i]
    i = (i + 1) % bank.length
    let steps = lev(word, bank[i])
    let n = setInterval(_ => {
      if (steps.length) word = steps.pop()
      else clearInterval(n)
    }, 50)
  }, 1500)
</script>

<Subheading text-gray-200 {...$$restProps}>
  I make <span whitespace-pre bold>{word}</span> things.
</Subheading>
