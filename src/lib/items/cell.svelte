<script lang='ts' module>
  export const desc = 'Zero-player games with squares that live many, many lives.'
  export const tags = ['digital', 'dev', 'art', 'collection']
  export const year = 2022
</script>

<script lang='ts'>
  import {
    A,
    Heading,
    IVideo,
    MediaImg,
    Prose,
    Sp,
    Subheading,
    Text,
  } from '$lib/components'
</script>

<Prose>
  <Heading>THE CELL COLLECTION</Heading>
  <Subheading>{desc}</Subheading>

  <Sp />
  <Subheading bold>3-Species Ecosystem</Subheading>
  <IVideo a='hnEuirk' />
  <Text>
    <A href='https://benpa.ng/RobotaPsyche/midterm'>Website</A>
    <br />
    <A href='https://github.com/molarmanful/RobotaPsyche/tree/main/midterm'>
      Source
    </A>
  </Text>

  <Sp />
  <Subheading bold>10-State Brain's Brain</Subheading>
  <MediaImg
    name='brian10'
    alt="Screenshot of 10-State Brian's Brain."
    px
  />
  <Text>
    <A href='https://editor.p5js.org/BandidoJim/sketches/_YeeANOn_'>
      p5.js Sketch
    </A>
    (<span class='bold'>WARNING</span>: flashing lights)
  </Text>

  <Sp />
  <Subheading bold>Brian's Brain</Subheading>
  <IVideo a='RrI149j' px />
  <Text>
    <A href='https://editor.p5js.org/BandidoJim/sketches/iJmQ7Gazy'>
      p5.js Sketch
    </A>
  </Text>

  <Sp />
  <Subheading bold>Stable Volatility</Subheading>
  <MediaImg
    name='stablevol'
    alt='Screenshot of Stable Volatility.'
    px
  />
  <Text>
    <A href='https://editor.p5js.org/BandidoJim/sketches/YS3amIiay'>
      p5.js Sketch
    </A>
    (<span class='bold'>WARNING</span>: flashing lights)
  </Text>

  <Sp />
  <Subheading bold>Fading Clamp Game of Life</Subheading>
  <MediaImg
    name='fcgol'
    alt='Screenshot of Fading Clamp Game of Life.'
    px
  />
  <Text>
    <A href='https://editor.p5js.org/BandidoJim/sketches/XgeJRhRpX'>
      p5.js Sketch
    </A>
    (<span class='bold'>WARNING</span>: flashing lights)
  </Text>

  <Sp />
  <Subheading bold>Reddit Rainbow (feat. Adham Chakohi)</Subheading>
  <MediaImg
    name='rainbow'
    alt='Screenshot of Reddit Rainbow.'
    px
  />
  <Text>
    <A href='https://benpa.ng/rainbow'>Website</A>
    (No longer works due to changes in Reddit's API)
    <br />
    <A href='https://github.com/molarmanful/rainbow'>Source</A>
  </Text>

  <Sp />
  <Subheading bold>Waterworks</Subheading>
  <IVideo a='ri9fp39' px />
  <Text>
    <A href='https://codepen.io/molarmanful/full/XzbwpP'>Website</A>
  </Text>
</Prose>
