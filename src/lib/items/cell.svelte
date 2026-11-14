<script lang='ts'>
  import A from '#lib/components/A.svelte'
  import IVideo from '#lib/components/IVideo.svelte'
  import MediaImg from '#lib/components/MediaImg.svelte'
  import Miniheading from '#lib/components/Miniheading.svelte'
  import Prose from '#lib/components/Prose.svelte'
  import Subheading from '#lib/components/Subheading.svelte'
  import { items } from '#lib/ts/items.ts'

  const meta = items.cell
</script>

<Prose>
  <h1>{meta.title}</h1>
  <Subheading>{meta.desc}</Subheading>

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
