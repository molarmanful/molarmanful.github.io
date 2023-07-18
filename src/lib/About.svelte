<script>
  import { Section, Heading, Subheading, Text, A } from './mixins'

  export let top = { name: 'abt' }

  let links = [
    ['Github', 'https://github.com/molarmanful'],
    ['Instagram', 'https://instagram.com/bandidojim'],
    ['ArtStation', 'https://bandidojim.artstation.com'],
    ['LinkedIn', 'https://linkedin.com/in/molarmanful'],
    ['Society6', 'https://society6.com/bandidojim'],
    ['PPCG.SE', 'https://codegolf.stackexchange.com/users/41247/mama-fun-roll'],
    [
      'CV',
      'https://docs.google.com/document/d/13Hy3akmfz9tvyFH6awZ8riWSCivtYQZa3TE-f_CGszI/edit?usp=sharing',
    ],
  ]

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
      <div w="lg:5/6" max-w="lt-xl:prose" mx="lt-lg:auto" px-2 prose>
        <Subheading data-aos="fade-in">
          <span bold text-red-50>BENJAMIN PANG</span> is a primarily self-taught
          artist / programmer from San Francisco, CA and a graduate student at NYU
          ITP.
        </Subheading>
        <Text data-aos="fade-in">
          With a background in software development and the sciences, he mainly
          deals with interactive installations, multimedia experiences, and
          CGI/VFX art.
        </Text>
        <Text data-aos="fade-in">
          Drawing influences from a wide variety of classical and contemporary
          artists, music, digital multimedia, and personal experiences, his work
          uses technical experimentation to explore sensory confusion, coping
          mechanisms, and loneliness in the post-digital age.
        </Text>
        <Text data-aos="fade-in">
          He is currently building odd programming languages, living life, and
          secretly making art.
        </Text>
        <Text data-aos="fade-in">
          This website is <A
            text-gray="100 hover:500"
            duration-500
            transition-colors
            href="https://github.com/molarmanful/molarmanful.github.io"
            >open-source</A
          >!
        </Text>
      </div>

      <div
        m="t-8 x-auto lg:(t-12 l-8 r-unset) xl:l-16"
        px="6 md:0 lg:8"
        max-w-prose
        prose
      >
        <h2
          type-6
          text=" stroked gray-500"
          data-aos="fade-left"
          noprose
        >
          LINKS
        </h2>
        <menu m="t-2 x-2 lg:t-4" data-aos="fade-left">
          {#each links as [name, link]}
            <li>
              <A
                un-text="gray-500 hover:white"
                duration-500
                transition-colors
                href={link}
              >
                {name}
              </A>
            </li>
          {/each}
        </menu>
      </div>
    </div>
  </div>
</Section>
