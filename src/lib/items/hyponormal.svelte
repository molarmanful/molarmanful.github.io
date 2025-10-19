<script lang='ts' module>
  export const title = 'HYPONORMAL'
  export const desc =
    '2022. An abstract Unity study of worldbuilding centered around non-Euclidean traversal mechanics.'
  export const tags = ['3d', 'digital', 'game', 'dev', 'art']
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
    <A href='https://bandidojim.itch.io/hyponormal'>Website</A>
  </p>

  <MediaImg name='hyponormal0' alt='Mountain shrouded in red sandstorm.' />

  <p>
    <em>There's normal, there's paranormal, and then there's... HYPONORMAL.</em>
  </p>
  <p>
    Imagine a world encapsulated inside a sphere such that gravity &mdash;
    rather than attracting towards the center of mass &mdash; instead repels
    outwards. What would walking in such a counterintuitive world feel like? How
    would people inhabit and develop this world over time? What kind of stories
    does this world have to tell?
  </p>
  <p>
    This non-Newtonian, non-Euclidean premise formed the basis for HYPONORMAL, a
    barren desert microworld battered and beaten by perpetual sandstorms. You
    are granted a unique opportunity to tread across these unforgiving lands and
    experience the spherical prison that eternally tethers you &mdash; and the
    ones who fell before you &mdash; to the ground.
  </p>

  <MediaImg
    name='hyponormal1'
    alt='Kneeling figures shrouded in red sandstorm.'
  />
  <MediaImg
    name='hyponormal2'
    alt='Classical Greco-Roman style statue with glowing blue eyes.'
  />
  <MediaImg
    name='hyponormal3'
    alt='Figures reaching out towards a glowing blue portal.'
  />
  <MediaImg
    name='hyponormal4'
    alt='Glowing red portal surrounded by a ruined building.'
  />
  <MediaImg name='hyponormal5' alt='Glowing blue Egyptian style obelisk.' />
  <MediaImg
    name='hyponormal6'
    alt='Figures prostrating in front of glowing blue obelisk.'
  />
  <YTVideo a='EeSWXgkycRY' title='HYPONORMAL' />
</Prose>
