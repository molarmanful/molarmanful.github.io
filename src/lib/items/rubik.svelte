<script lang='ts' module>
  export const title = 'THE RUBIK COLLECTION'
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

<script lang='ts'>
  import A from '$lib/components/A.svelte'
  import MediaImg from '$lib/components/MediaImg.svelte'
  import Miniheading from '$lib/components/Miniheading.svelte'
  import Prose from '$lib/components/Prose.svelte'
  import Subheading from '$lib/components/Subheading.svelte'
</script>

<Prose>
  <h1>{title}</h1>
  <Subheading>{desc}</Subheading>

  <Miniheading>A Cube Tutorial</Miniheading>
  <MediaImg name='cubetut' alt='The Cube Tutorial website.' />
  <p>
    An interactive tutorial for solving the Rubik's Cube, featuring a clean UI
    and a companion cube that hides pieces based on the step.
  </p>
  <p>
    <A href='https://benpa.ng/cubetut'>Website</A> (best viewed on desktop)
    <br />
    <A href='https://github.com/molarmanful/cubetut'>Source</A>
  </p>

  <Miniheading>pycube</Miniheading>
  <MediaImg name='pycube' alt='The pycube interface.' />
  <p>
    Made in collaboration with Jimoh Yusuf. A reimplementation of the Rubik's
    Cube in Processing.py with mouse/keyboard modes and timing.
  </p>
  <p>
    <A href='https://github.com/molarmanful/pycube'>Source</A>
  </p>

  <Miniheading>gCube</Miniheading>
  <MediaImg name='gcube' alt="Sample of gCube's text sticker capability." />
  <p>
    Made in collaboration with Michael Casebolt. A web framework for cube
    simulation with extensive visual customization options.
  </p>
  <p>
    <A href='https://codepen.io/collection/XOLVLQ'>Demos</A>
    <br />
    <A href='https://github.com/molarmanful/pycube'>Source</A>
  </p>

  <Miniheading>MinimalisTimer</Miniheading>
  <MediaImg name='minimalistimer' alt='The MinimalisTimer website.' />
  <p>
    When MinimalisTimer was first created, there weren't many options for cube
    timers that had mobile-friendly responsive designs. MinimalisTimer was my
    answer to this problem, focusing on clean UI and accessibility for both
    mobile and desktop devices.
  </p>
  <p>
    <A href='https://benpa.ng/minimalistimer'>Website</A>
    <br />
    <A href='https://github.com/molarmanful/minimalistimer'>Source</A>
  </p>

  <!--
  <Miniheading>PLL Trainer</Miniheading>
  <MediaImg name="pll" alt="The PLL Trainer interface." />
  <p>
    The precursor to MinimalisTimer and my first foray into creating responsive
    web apps. PLL Trainer was made for speedcubers looking to improve their PLL
    algorithms execution.
  </p>
  <p>
    <A href="https://benpa.ng/minimalistimer">Website</A>
  </p>
  -->
</Prose>
