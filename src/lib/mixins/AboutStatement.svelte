<script>
  import { A, Subheading, Text } from '.'

  let { ...props } = $props()
</script>

<div prose="" {...props}>
  <Subheading data-aos="fade-in">
    <span bold text-red-50>BENJAMIN PANG</span> is a primarily self-taught artist
    / programmer from San Francisco, CA and a graduate student at NYU ITP.
  </Subheading>
  <Text data-aos="fade-in">
    With a background in software development and the sciences, he mainly deals
    with interactive installations, multimedia experiences, and CGI/VFX art.
  </Text>
  <Text data-aos="fade-in">
    Drawing influences from a wide variety of classical and contemporary
    artists, music, digital multimedia, and personal experiences, his work uses
    technical experimentation to explore sensory confusion, coping mechanisms,
    and loneliness in the post-digital age.
  </Text>
  <Text data-aos="fade-in">
    He is currently building odd programming languages, living life, and
    secretly making art.
  </Text>
  <Text data-aos="fade-in">
    This website is <A
      border="1 transparent focus:current"
      duration-500
      href="https://github.com/molarmanful/molarmanful.github.io"
      outline="none"
      transition-colors
      un-text="gray-100 focus:white">open-source</A
    >!
  </Text>
</div>
