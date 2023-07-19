<script>
  import { Section, Heading, AboutStatement, AboutLinks } from './mixins'

  export let top = { name: 'abt' }

  let update = n => {
    top.n = n
    top = top
  }
</script>

<Section ot={update} bord="true">
  <div
    border="xl:(t l) gray-500"
    p="t-8 md:(x-8 t-16) lg:x-16"
    text="gray-400"
    w-screen
    mx-auto
    container="lg:~"
  >
    <div max-w="lt-lg:prose" mx="lt-lg:auto" prose>
      <Heading data-aos="fade-in">WHO EVEN IS THIS GUY?</Heading>
    </div>

    <div pb="16 lg:32" divide="lg:x gray-500" flex="lg:~">
      <AboutStatement w="lg:5/6" max-w="lt-xl:prose" mx="lt-lg:auto" px="2" />

      <AboutLinks
        m="t-8 x-auto lg:(t-12 l-8 r-unset) xl:l-16"
        px="6 md:0 lg:8"
        max-w="prose"
      />
    </div>
  </div>
</Section>
