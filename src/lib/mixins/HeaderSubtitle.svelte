<script>
  import lev from '../js/lev'

  import { Subheading } from '$lib/mixins'

  const bank = [
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

  setInterval(() => {
    word = bank[i]
    i = (i + 1) % bank.length
    const steps = lev(word, bank[i])
    let n = setInterval(() => {
      if (steps.length) word = steps.pop()
      else clearInterval(n)
    }, 50)
  }, 1500)
</script>

<Subheading {...$$restProps}>
  I make <span bold whitespace-pre>{word}</span> things.
</Subheading>
