<script context="module">
  export const desc =
    'A simple puzzle that has stumped the world for decades. Digital gadgets for the aspiring cuber.'
  export const tags = [
    '3d',
    'digital',
    'front-end',
    'dev',
    'design',
    'game',
    'collection',
  ]
  export const year = 2021
</script>

<script>
  import { A, Heading, MediaImg, Prose, Subheading, Text } from '../mixins'
</script>

<Prose>
  <Heading>THE RUBIK COLLECTION</Heading>
  <Subheading>{desc}</Subheading>

  <Subheading bold>A Cube Tutorial</Subheading>
  <MediaImg name="cubetut" alt="The Cube Tutorial website." />
  <Text>
    An interactive tutorial for solving the Rubik's Cube, featuring a clean UI
    and a companion cube that hides pieces based on the step.
  </Text>
  <Text>
    <A href="https://bennyboy.tech/cubetut">Website</A> (best viewed on desktop)
    <br />
    <A href="https://github.com/molarmanful/cubetut">Source</A>
  </Text>

  <Subheading bold>pycube</Subheading>
  <MediaImg name="pycube" alt="The pycube interface." />
  <Text>
    Made in collaboration with Jimoh Yusuf. A reimplementation of the Rubik's
    Cube in Processing.py with mouse/keyboard modes and timing.
  </Text>
  <Text>
    <A href="https://github.com/molarmanful/pycube">Source</A>
  </Text>

  <Subheading bold>gCube</Subheading>
  <MediaImg name="gcube" alt="Sample of gCube's text sticker capability." />
  <Text>
    Made in collaboration with Michael Casebolt. A web framework for cube
    simulation with extensive visual customization options.
  </Text>
  <Text>
    <A href="https://codepen.io/collection/XOLVLQ">Demos</A>
    <br />
    <A href="https://github.com/molarmanful/pycube">Source</A>
  </Text>

  <Subheading bold>MinimalisTimer</Subheading>
  <MediaImg name="minimalistimer" alt="The MinimalisTimer website." />
  <Text>
    When MinimalisTimer was first created, there weren't many options for cube
    timers that had mobile-friendly responsive designs. MinimalisTimer was my
    answer to this problem, focusing on clean UI and accessibility for both
    mobile and desktop devices.
  </Text>
  <Text>
    <A href="https://bennyboy.tech/minimalistimer">Website</A>
    <br />
    <A href="https://github.com/molarmanful/minimalistimer">Source</A>
  </Text>

  <!--
  <Subheading bold>PLL Trainer</Subheading>
  <MediaImg name="pll" alt="The PLL Trainer interface." />
  <Text>
    The precursor to MinimalisTimer and my first foray into creating responsive
    web apps. PLL Trainer was made for speedcubers looking to improve their PLL
    algorithms execution.
  </Text>
  <Text>
    <A href="https://bennyboy.tech/minimalistimer">Website</A>
  </Text>
  -->
</Prose>
