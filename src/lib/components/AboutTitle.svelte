<script lang='ts'>
  import lev from '../js/lev'

  import { Heading } from '.'

  const bank = [
    'WEIRD',
    'WEIRD ART',
    '2D ART',
    '3D ART',
    '4D ART',
    'DYNAMIC',
    'DIGITAL',
    'PHYSICAL',
    'RADICAL',
    'WIZARD',
  ]
  let i = 0
  let word = $state(bank[i])

  $effect(() => {
    const t = setInterval(() => {
      word = bank[i]
      i = (i + 1) % bank.length
      const steps = lev(word, bank[i])
      const n = setInterval(() => {
        if (steps.length > 0) {
          word = steps.pop()!
          return
        }
        clearInterval(n)
      }, 50)
    }, 1500)

    return () => clearInterval(t)
  })
</script>

<Heading data-aos='fade-in'>
  I MAKE
  <br class='xs1:hidden' />
  <span class='whitespace-nowrap text-unstroked'>
    {word}
  </span>
  <br class='xs2:hidden' />
  THINGS.
</Heading>
