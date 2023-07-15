<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, Text, A, MediaImg } from '../mixins'

  export let D

  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>THE RUBIK COLLECTION</Heading>
  <Subheading>
    A simple puzzle that has stumped the world for decades. Gadgets and trinkets
    for the aspiring cuber.
  </Subheading>

  <div mt-16 />
  <Subheading bold>A Cube Tutorial</Subheading>
  <div mt-8 />
  <MediaImg {D} name="cubetut" />
  <Text>
    An interactive tutorial for solving the Rubik's Cube, featuring a clean UI
    and a companion cube that hides pieces based on the step.
  </Text>
  <Text>
    <A href="https://bennyboy.tech/cubetut">Website</A> (best viewed on desktop)
    <br />
    <A href="https://github.com/molarmanful/cubetut">Source</A>
  </Text>

  <div mt-16 />
  <Subheading bold>pycube</Subheading>
  <div mt-8 />
  <MediaImg {D} name="pycube" />
  <Text>
    Made in collaboration with Jimoh Yusuf. A reimplementation of the Rubik's
    Cube in Processing.py with mouse/keyboard modes and timing.
  </Text>
  <Text>
    <A href="https://github.com/molarmanful/pycube">Source</A>
  </Text>

  <div mt-16 />
  <Subheading bold>gCube</Subheading>
  <div mt-8 />
  <MediaImg {D} name="gcube" />
  <Text>
    Made in collaboration with Michael Casebolt. A web framework for cube
    simulation with extensive visual customization options.
  </Text>
  <Text>
    <A href="https://codepen.io/collection/XOLVLQ">Demos</A>
    <br />
    <A href="https://github.com/molarmanful/pycube">Source</A>
  </Text>

  <div mt-16 />
  <Subheading bold>MinimalisTimer</Subheading>
  <div mt-8 />
  <MediaImg {D} name="minimalistimer" />
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

  <div mt-16 />
  <Subheading bold>PLL Trainer</Subheading>
  <div mt-8 />
  <MediaImg {D} name="pll" />
  <Text>
    The precursor to MinimalisTimer and my first foray into creating responsive
    web apps. PLL Trainer was made for speedcubers looking to improve their PLL
    algorithms execution.
  </Text>
  <Text>
    <A href="https://bennyboy.tech/minimalistimer">Website</A>
  </Text>
</Prose>
