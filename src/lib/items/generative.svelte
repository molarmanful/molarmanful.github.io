<script>
  import {
    Prose,
    Heading,
    Subheading,
    Text,
    A,
    MediaImg,
    YTVideo,
    IVideo,
  } from '../mixins'

  export let desc =
    'From code blossoms art. Works created with autonomous systems to spawn infinite variation.'
</script>

<Prose>
  <Heading>THE GENERATIVE COLLECTION</Heading>
  <Subheading>{desc}</Subheading>

  <Subheading bold>Nihilism</Subheading>
  <MediaImg name="nihilism" />
  <Text>
    <A
      href="https://colab.research.google.com/drive/1DjUw9jp47cCAorEm0pN2cj4_1ksG8hBS?usp=sharing"
    >
      Source
    </A>
  </Text>

  <Subheading bold>Entanglement</Subheading>
  <IVideo a="QmXN4z9" aspect="video" title="Entanglement" />
  <Text>
    <A href="https://github.com/molarmanful/entanglement">Source</A>
  </Text>

  <Subheading bold>Joy of Abstract Art with Rob Boss</Subheading>
  <YTVideo a="f_mWTjxUbqk" title="Joy of Abstract Art with Rob Boss" />
  <Text>
    <A href="https://github.com/molarmanful/rob-boss">Source</A>
  </Text>

  <Subheading bold>Bezier Pulse</Subheading>
  <IVideo a="Z04vm99" aspect="video" title="Bezier Pulse" />
  <Text>
    <A href="https://github.com/molarmanful/bezier-pulse">Source</A>
  </Text>
</Prose>
