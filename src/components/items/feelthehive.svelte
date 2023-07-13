<script>
  import { onMount } from 'svelte'
  import {
    Prose,
    Heading,
    Subheading,
    Text,
    A,
    MediaImg,
    YTVideo,
  } from '../mixins'

  export let D

  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>FEEL THE HIVE</Heading>
  <Subheading>
    2022. An Internet-powered backscratcher that converts clicks and taps to
    scratches.
  </Subheading>
  <Text>
    <A href="https://wp.nyu.edu/itp_multisensory_design/project-ben">Devblog</A>
    <br />
    <A href="https://github.com/molarmanful/feelthehive">Source</A>
  </Text>
  <Text>
    <em>Feel the Hive</em> is an IoT project that uses the premise of an Internet-powered
    backscratcher to deconstruct social/power dynamics found in interactions between
    Internet content creators and their viewers. Feel the Hive aims to play with
    the sensory disconnect of indirectly "touching" someone through a screen to provide
    a microculture reflective of parasocial relationships and power imbalances.
  </Text>
  <Text>
    The project is split into two components: the clients (i.e. users) and the
    host. The host wears a rig with servos attached. Clients access a webapp and
    are instructed to tap the screen repeatedly. Each tap translates to the
    servos moving, which scratches the host's back. Faster taps mean faster
    servo scratches, potentially to the point of discomfort for the host.
  </Text>

  <div mt-8 />
  <MediaImg {D} name="fth" />
  <YTVideo x a="r74HAS_mBL0" title="FEEL THE HIVE" />
</Prose>
