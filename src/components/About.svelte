<script>
  import Section from './Section.svelte'

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
</script>

<Section id="abt">
  <div w-full border="t lg:l gray-500">
    <div
      px-16
      pt-16
      w="full lg:auto"
      text="l lg:2xl gray-400"
      font-light
      class="lg:container"
    >
      <h1
        text="4xl md:5xl lg:6xl 2xl:8xl stroked stroked-gray-500"
        mb-12
        data-aos="fade-in"
      >
        WHO EVEN IS THIS GUY?
      </h1>

      <div pb-32 divide="xl:x gray-500" class="xl:flex">
        <div class="paras xl:w-5/6 xl:ml-4">
          <p text="xl gray-300 md:2xl lg:4xl" data-aos="fade-in">
            <span bold text-red-50>BENJAMIN PANG</span> is a primarily self-taught
            artist / programmer from San Francisco, CA and a graduate student at
            NYU ITP.
          </p>
          <p data-aos="fade-in">
            With a background in software development and the sciences, he
            mainly deals with interactive installations, multimedia experiences,
            and CGI/VFX art.
          </p>
          <p data-aos="fade-in">
            Drawing influences from a wide variety of classical and contemporary
            artists, music, digital multimedia, and personal experiences, his
            work explores sensory confusion, coping mechanisms, and loneliness
            under the guise of technical experimentation.
          </p>
          <p data-aos="fade-in">
            He is currently building odd programming languages, living life, and
            secretly making art.
          </p>
          <p data-aos="fade-in">
            This personal website is open-source! You can view the code
            <a
              text-gray="100 hover:500"
              duration-500
              transition-colors
              href="https://github.com/molarmanful/molarmanful.github.io"
              target="_blank">here</a
            >.
          </p>
        </div>

        <div class="xl:w-1/6 xl:ml-8 xl:px-8 xl:mt-0">
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
                <a
                  text="gray-500 hover:white"
                  underline
                  duration-500
                  transition-colors
                  href={link}
                  target="_blank">{name}</a
                >
              </li>
            {/each}
          </menu>
        </div>
      </div>
    </div>
  </div>
</Section>
