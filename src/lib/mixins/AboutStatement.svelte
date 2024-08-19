<script>
  import { A, Subheading, Text } from '.'

  let { ...props } = $props()
</script>

{#snippet h3(text, c)}
  <h3 class={c} bold data-aos="fade-in" mt="4 lg:8">
    {text}
  </h3>
{/snippet}

<div prose="" {...props}>
  <Subheading data-aos="fade-in">
    <span bold text-gray-100>BENJAMIN PANG</span> is a creative technologist from
    the California Bay Area and a graduate of NYU ITP.
  </Subheading>
  {@render h3('JOB', 'text-blue-500')}
  <Text data-aos="fade-in" mt="1 lg:2">
    With extensive hands-on experience in full-stack development, digital
    design, interactive installations, multimedia experiences, and CGI/VFX art,
    his expertise lies in unifying art and tech into balanced, compelling final
    products.
  </Text>
  {@render h3('ART', 'text-red-500')}
  <Text data-aos="fade-in" mt="1 lg:2">
    Drawing influences from a wide variety of classical and contemporary
    artists, music, digital multimedia, and personal experiences, his artwork
    explores sensory confusion, coping mechanisms, and loneliness in the
    post-digital age.
  </Text>
  {@render h3('NOW', 'text-green-500')}
  <Text data-aos="fade-in" mt="1 lg:2">
    He is building odd programming languages, designing bitmap fonts, living
    life, and secretly making art.
  </Text>
  <Text data-aos="fade-in" italic="" text="gray-500">
    This website is <A
      b="1 transparent focus:current"
      duration-500
      href="https://github.com/molarmanful/molarmanful.github.io"
      outline="none"
      transition-colors
      un-text="gray-100 focus:white">open-source</A
    >!
  </Text>
</div>
