<script>
  import { AboutLinks, AboutStatement, Heading, Section } from './mixins'

  let { top } = $props()
</script>

<Section bord="true" nav="abt" {top}>
  <div
    border="3xl:(t l) gray-500"
    container="lg:"
    mx-auto
    p="t-8 md:(x-8 t-16) lg:x-16"
    w-screen
  >
    <div max-w="lt-lg:prose" mx="lt-lg:auto" prose>
      <Heading data-aos="fade-in">WHO EVEN IS THIS GUY?</Heading>
    </div>

    <div divide="lg:x gray-500" flex="lg:" pb="16 lg:32">
      <AboutStatement
        max-w="prose xl:[80ch]"
        mx="lt-lg:auto"
        px="2"
        w="lg:5/6"
      />

      <AboutLinks
        m="t-8 x-auto lg:(t-12 l-auto r-unset)"
        max-w="prose"
        px="6 md:0 lg:8"
      />
    </div>
  </div>
</Section>
