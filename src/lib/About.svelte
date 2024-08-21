<script>
  import lev from './js/lev'
  import { AboutLinks, AboutStatement, Heading, Section } from './mixins'

  const { top = () => {} } = $props()

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
      let n = setInterval(() => {
        if (steps.length) word = steps.pop()
        else clearInterval(n)
      }, 50)
    }, 1500)

    return () => clearInterval(t)
  })
</script>

<Section bord nav="abt" {top}>
  <div
    b="3xl:(t l) bord"
    container="lg:"
    mx-auto
    p="t-8 md:(x-8 t-16) xl:x-16"
    w-screen
  >
    <div max-w="lt-lg:prose" mx="lt-lg:auto" prose>
      <Heading data-aos="fade-in">
        I MAKE
        <br un-hidden="xs1:" />
        <span text-unstroked whitespace-nowrap>
          {word}
        </span>
        <br un-hidden="xs2:" />
        THINGS.
      </Heading>
    </div>

    <div divide="lg:x bord" flex="lg:" pb="16 lg:32">
      <AboutStatement max-w="prose xl:[80ch]" mx="lt-lg:auto" px="2" />

      <AboutLinks
        m="t-8 x-auto lg:(t-12 l-auto r-unset)"
        max-w="prose"
        px="6 md:0 lg:8"
      />
    </div>
  </div>
</Section>
