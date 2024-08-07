<script>
  import { A, Subheading, Text } from '.'

  let { ...props } = $props()
</script>

<div prose="" {...props}>
  <Subheading data-aos="fade-in">
    <span bold text-red-50>BENJAMIN PANG</span> is a creative technologist from the
    California Bay Area and a graduate of NYU ITP.
  </Subheading>
  <Text data-aos="fade-in">
    With extensive hands-on experience in full-stack development, digital
    design, interactive installations, multimedia experiences, and CGI/VFX art,
    his expertise lies in unifying art and tech into balanced, compelling final
    products.
  </Text>
  <Text data-aos="fade-in">
    Drawing influences from a wide variety of classical and contemporary
    artists, music, digital multimedia, and personal experiences, his artwork
    explores sensory confusion, coping mechanisms, and loneliness in the
    post-digital age.
  </Text>
  <Text data-aos="fade-in">
    He is currently building odd programming languages, designing bitmap fonts,
    living life, and secretly making art.
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
