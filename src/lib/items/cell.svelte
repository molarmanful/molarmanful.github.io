<script context="module">
  export const desc =
    'Zero-player games with squares that live many, many lives.'
  export const tags = ['digital', 'dev', 'art', 'collection']
  export const year = 2022
</script>

<script>
  import {
    A,
    Heading,
    IVideo,
    MediaImg,
    Prose,
    Sp,
    Subheading,
    Text,
  } from '../mixins'
</script>

<Prose>
  <Heading>THE CELL COLLECTION</Heading>
  <Subheading>{desc}</Subheading>

  <Sp />
  <Subheading bold>3-Species Ecosystem</Subheading>
  <MediaImg name="3species" alt="Screenshot of 3-Species Ecosystem." />
  <Text>
    <A href="https://bennyboy.tech/RobotaPsyche/midterm">Website</A>
    <br />
    <A href="https://github.com/molarmanful/RobotaPsyche/tree/main/midterm">
      Source
    </A>
  </Text>

  <Sp />
  <Subheading bold>Fading Clamp Game of Life</Subheading>
  <MediaImg
    name="fcgol"
    alt="Screenshot of Fading Clamp Game of Life."
    image-render="pixel"
  />
  <Text>
    <A href="https://editor.p5js.org/BandidoJim/full/XgeJRhRpX">p5.js Sketch</A>
    (WARNING: flashing lights)
  </Text>

  <Sp />
  <Subheading bold>Brian's Brain</Subheading>
  <IVideo a="RrI149j" px />
  <Text>
    <A href="https://editor.p5js.org/BandidoJim/full/iJmQ7Gazy">p5.js Sketch</A>
  </Text>

  <Sp />
  <Subheading bold>Reddit Rainbow (feat. Adham Chakohi)</Subheading>
  <MediaImg
    name="rainbow"
    alt="Screenshot of Reddit Rainbow."
    image-render="pixel"
  />
  <Text>
    <A href="https://bennyboy.tech/rainbow">Website</A>
    <br />
    <A href="https://github.com/molarmanful/rainbow">Source</A>
  </Text>

  <Sp />
  <Subheading bold>Waterworks</Subheading>
  <MediaImg name="waterworks" alt="Screenshot of Waterworks." />
  <Text>
    <A href="https://codepen.io/molarmanful/full/XzbwpP">Website</A>
  </Text>
</Prose>
