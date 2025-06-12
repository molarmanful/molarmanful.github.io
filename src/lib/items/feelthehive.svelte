<script lang='ts' module>
  export const title = 'FEEL THE HIVE'
  export const desc = '2022. An Internet-powered backscratcher that converts clicks and taps to scratches.'
  export const tags = [
    'physical',
    'digital',
    'full-stack',
    'front-end',
    'back-end',
    'dev',
    'art',
    'iot',
  ]
  export const year = 2022
</script>

<script lang='ts'>
  import A from '$lib/components/A.svelte'
  import MediaImg from '$lib/components/MediaImg.svelte'
  import Prose from '$lib/components/Prose.svelte'
  import Subheading from '$lib/components/Subheading.svelte'
  import YTVideo from '$lib/components/YTVideo.svelte'
</script>

<Prose>
  <h1>{title}</h1>
  <Subheading>{desc}</Subheading>

  <p>
    <A href='https://wp.nyu.edu/itp_multisensory_design/project-ben'>Devblog</A>
    <br />
    <A href='https://github.com/molarmanful/feelthehive'>Source</A>
  </p>

  <MediaImg
    name='fth'
    alt='Ben Pang wearing the Feel the Hive backscratcher rig.'
  />

  <p>
    <em>Feel the Hive</em> is an IoT project that uses the premise of an
    Internet-powered backscratcher to deconstruct social/power dynamics found
    in interactions between Internet content creators and their viewers. Feel
    the Hive aims to play with the sensory disconnect of indirectly "touching"
    someone through a screen to provide a microculture reflective of parasocial
    relationships and power imbalances.
  </p>
  <p>
    The project is split into two components: the clients (i.e. users) and the
    host. The host wears a rig with servos attached. Clients access a webapp
    and are instructed to tap the screen repeatedly. Each tap translates to the
    servos moving, which scratches the host's back. Faster taps mean faster
    servo scratches, potentially to the point of discomfort for the host.
  </p>

  <YTVideo a='r74HAS_mBL0' title='FEEL THE HIVE' />
</Prose>
