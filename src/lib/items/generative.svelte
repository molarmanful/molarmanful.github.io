<script lang='ts' module>
  export const desc = 'From code blossoms art. Works created with autonomous systems to spawn infinite variation.'
  export const tags = ['digital', 'dev', 'art', 'collection']
  export const year = 2021
</script>

<script lang='ts'>
  import { artalt } from '$lib/js/util.svelte'
  import {
    A,
    Heading,
    IVideo,
    MediaImg,
    Prose,
    Sp,
    Subheading,
    Text,
  // YTVideo,
  } from '$lib/components'
</script>

<Prose>
  <Heading>THE GENERATIVE COLLECTION</Heading>
  <Subheading>{desc}</Subheading>

  <Sp />
  <Subheading bold>Chaotic Retro Spaceship Noise Machine</Subheading>
  <IVideo a='9PGgByI' />
  <Text>
    <A href='https://editor.p5js.org/BandidoJim/sketches/kftBXfZGR'>
      p5.js Sketch
    </A>
  </Text>

  <Sp />
  <Subheading bold>Chaotic Drowning Ambient Noise Machine</Subheading>
  <IVideo a='zDONZTp' />
  <Text>
    <A href='https://editor.p5js.org/BandidoJim/sketches/ZJW4MjgkD'>
      p5.js Sketch
    </A>
  </Text>

  <Sp />
  <Subheading bold>Self-Portrait</Subheading>
  <MediaImg name='selfportrait' alt={artalt('Self-Portrait')} />
  <Text>
    <A href='https://editor.p5js.org/BandidoJim/sketches/IQG4jN2Kz'>
      p5.js Sketch
    </A>
  </Text>

  <Sp />
  <Subheading bold>Entanglement</Subheading>
  <IVideo a='QmXN4z9' aspect='video' />
  <Text>
    <A href='https://github.com/molarmanful/entanglement'>Source</A>
  </Text>

  <!--
  <Sp />
  <Subheading bold>Joy of Abstract Art with Rob Boss</Subheading>
  <YTVideo a="f_mWTjxUbqk" title="Joy of Abstract Art with Rob Boss" />
  <Text>
    <A href="https://github.com/molarmanful/rob-boss">Source</A>
  </Text>
  -->

  <Sp />
  <Subheading bold>Bezier Pulse</Subheading>
  <IVideo a='Z04vm99' aspect='video' />
  <Text>
    <A href='https://github.com/molarmanful/bezier-pulse'>Source</A>
  </Text>

  <Sp />
  <Subheading bold>Nihilism</Subheading>
  <MediaImg name='nihilism' alt={artalt('Nihilism')} />
  <Text>
    <A href='https://colab.research.google.com/drive/1DjUw9jp47cCAorEm0pN2cj4_1ksG8hBS?usp=sharing'>
      Source
    </A>
  </Text>
</Prose>
