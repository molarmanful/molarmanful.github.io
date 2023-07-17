<script>
  import { Section, Subheading, Text, A } from './mixins'

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

<Section ot={update}>
  <div w-full border="t lg:l gray-500">
    <div
      p="x-8 t-8 md:x-16 md:t-16"
      w="full lg:auto"
      text="l lg:2xl gray-400"
      container="lg:~"
    >
      <h1
        text="4xl md:5xl lg:6xl 2xl:8xl stroked stroked-gray-500"
        mb-12
        data-aos="fade-in"
      >
        WHO EVEN IS THIS GUY?
      </h1>

      <div pb-32 divide="xl:x gray-500" flex="xl:~">
        <div w="xl:5/6" m="xl:l-4 xl:r-8" prose>
          <Subheading data-aos="fade-in">
            <span bold text-red-50>BENJAMIN PANG</span> is a primarily self-taught
            artist / programmer from San Francisco, CA and a graduate student at
            NYU ITP.
          </Subheading>
          <Text data-aos="fade-in">
            With a background in software development and the sciences, he
            mainly deals with interactive installations, multimedia experiences,
            and CGI/VFX art.
          </Text>
          <Text data-aos="fade-in">
            Drawing influences from a wide variety of classical and contemporary
            artists, music, digital multimedia, and personal experiences, his
            work uses technical experimentation to explore sensory confusion,
            coping mechanisms, and loneliness in the post-digital age.
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

        <div w="xl:1/6" m="t-8 xl:l-8 xl:t-0" p="xl:x-8">
          <h2
            text="2xl md:3xl lg:5xl stroked stroked-gray-500"
            mb-4
            data-aos="fade-left"
          >
            LINKS
          </h2>
          <menu mx-2 data-aos="fade-left">
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
  </div>
</Section>
