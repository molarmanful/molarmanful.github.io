<script lang='ts' module>
  export const meta = {
    title: 'THE GENERATIVE COLLECTION',
    desc:
      'From code blossoms art. Works created with autonomous systems to spawn infinite variation.',
    tags: ['digital', 'dev', 'art', 'collection'],
    year: 2021,
  }
</script>

<script lang='ts'>
  import A from '#lib/components/A.svelte'
  import IVideo from '#lib/components/IVideo.svelte'
  import MediaImg from '#lib/components/MediaImg.svelte'
  import Miniheading from '#lib/components/Miniheading.svelte'
  import Prose from '#lib/components/Prose.svelte'
  import Subheading from '#lib/components/Subheading.svelte'
  import { artalt } from '#lib/ts/meta.ts'
</script>

<Prose>
  <h1>{meta.title}</h1>
  <Subheading>{meta.desc}</Subheading>

  <Miniheading>Chaotic Retro Spaceship Noise Machine</Miniheading>
  <IVideo a='9PGgByI' />
  <p>
    <A href='https://editor.p5js.org/BandidoJim/sketches/kftBXfZGR'>
      p5.js Sketch
    </A>
  </p>

  <Miniheading>Chaotic Drowning Ambient Noise Machine</Miniheading>
  <IVideo a='zDONZTp' />
  <p>
    <A href='https://editor.p5js.org/BandidoJim/sketches/ZJW4MjgkD'>
      p5.js Sketch
    </A>
  </p>

  <Miniheading>Self-Portrait</Miniheading>
  <MediaImg name='selfportrait' alt={artalt('Self-Portrait')} />
  <p>
    <A href='https://editor.p5js.org/BandidoJim/sketches/IQG4jN2Kz'>
      p5.js Sketch
    </A>
  </p>

  <Miniheading>Entanglement</Miniheading>
  <IVideo class='aspect-video' a='QmXN4z9' />
  <p>
    <A href='https://github.com/molarmanful/entanglement'>Source</A>
  </p>

  <!--
  <Miniheading>Joy of Abstract Art with Rob Boss</Miniheading>
  <YTVideo a="f_mWTjxUbqk" title="Joy of Abstract Art with Rob Boss" />
  <p>
    <A href="https://github.com/molarmanful/rob-boss">Source</A>
  </p>
  -->

  <Miniheading>Bezier Pulse</Miniheading>
  <IVideo class='aspect-video' a='Z04vm99' />
  <p>
    <A href='https://github.com/molarmanful/bezier-pulse'>Source</A>
  </p>

  <Miniheading>Nihilism</Miniheading>
  <MediaImg name='nihilism' alt={artalt('Nihilism')} />
  <p>
    <A
      href='https://colab.research.google.com/drive/1DjUw9jp47cCAorEm0pN2cj4_1ksG8hBS?usp=sharing'
    >
      Source
    </A>
  </p>
</Prose>
