<script lang='ts' module>
  export const meta = {
    title: 'AIRPOD ADDICTION',
    desc:
      "2019 - made in collaboration with Ganjina Oripova and Fay Zhuang. Website for a silent short film made in 30 minutes which poked fun at the fanatical culture around Apple's AirPods.",
    tags: ['front-end', 'digital', 'dev', 'design'],
    year: 2019,
  }
</script>

<script lang='ts'>
  import A from '#lib/components/A.svelte'
  import MediaImg from '#lib/components/MediaImg.svelte'
  import Prose from '#lib/components/Prose.svelte'
  import Subheading from '#lib/components/Subheading.svelte'
</script>

<Prose>
  <h1>{meta.title}</h1>
  <Subheading>{meta.desc}</Subheading>

  <p>
    <A href='https://bp1574.nyuadim.com/30mff'>Website</A>
    (best viewed on desktop)
  </p>

  <MediaImg name='30mff' alt='The Airpod Addiction website.' />
</Prose>
