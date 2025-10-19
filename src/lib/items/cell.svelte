<script lang='ts' module>
  export const title = 'THE CELL COLLECTION'
  export const desc =
    'Zero-player games with squares that live many, many lives.'
  export const tags = ['digital', 'dev', 'art', 'collection']
  export const year = 2022
</script>

<script lang='ts'>
  import A from '$lib/components/A.svelte'
  import IVideo from '$lib/components/IVideo.svelte'
  import MediaImg from '$lib/components/MediaImg.svelte'
  import Miniheading from '$lib/components/Miniheading.svelte'
  import Prose from '$lib/components/Prose.svelte'
  import Subheading from '$lib/components/Subheading.svelte'
</script>

<Prose>
  <h1>{title}</h1>
  <Subheading>{desc}</Subheading>

  <Miniheading>3-Species Ecosystem</Miniheading>
  <IVideo a='hnEuirk' />
  <p>
    <A href='https://benpa.ng/RobotaPsyche/midterm'>Website</A>
    <br />
    <A href='https://github.com/molarmanful/RobotaPsyche/tree/main/midterm'>
      Source
    </A>
  </p>

  <Miniheading>10-State Brain's Brain</Miniheading>
  <MediaImg
    name='brian10'
    alt="Screenshot of 10-State Brian's Brain."
    px
  />
  <p>
    <A href='https://editor.p5js.org/BandidoJim/sketches/_YeeANOn_'>
      p5.js Sketch
    </A>
    (<strong>WARNING</strong>: flashing lights)
  </p>

  <Miniheading>Brian's Brain</Miniheading>
  <IVideo a='RrI149j' px />
  <p>
    <A href='https://editor.p5js.org/BandidoJim/sketches/iJmQ7Gazy'>
      p5.js Sketch
    </A>
  </p>

  <Miniheading>Stable Volatility</Miniheading>
  <MediaImg
    name='stablevol'
    alt='Screenshot of Stable Volatility.'
    px
  />
  <p>
    <A href='https://editor.p5js.org/BandidoJim/sketches/YS3amIiay'>
      p5.js Sketch
    </A>
    (<strong>WARNING</strong>: flashing lights)
  </p>

  <Miniheading>Fading Clamp Game of Life</Miniheading>
  <MediaImg
    name='fcgol'
    alt='Screenshot of Fading Clamp Game of Life.'
    px
  />
  <p>
    <A href='https://editor.p5js.org/BandidoJim/sketches/XgeJRhRpX'>
      p5.js Sketch
    </A>
    (<strong>WARNING</strong>: flashing lights)
  </p>

  <Miniheading>Reddit Rainbow (feat. Adham Chakohi)</Miniheading>
  <MediaImg
    name='rainbow'
    alt='Screenshot of Reddit Rainbow.'
    px
  />
  <p>
    <A href='https://benpa.ng/rainbow'>Website</A>
    (No longer works due to changes in Reddit's API)
    <br />
    <A href='https://github.com/molarmanful/rainbow'>Source</A>
  </p>

  <Miniheading>Waterworks</Miniheading>
  <IVideo a='ri9fp39' px />
  <p>
    <A href='https://codepen.io/molarmanful/full/XzbwpP'>Website</A>
  </p>
</Prose>
