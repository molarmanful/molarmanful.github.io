<script lang='ts' module>
  export const title = 'AIRPOD ADDICTION'
  export const desc = '2019 - made in collaboration with Ganjina Oripova and Fay Zhuang. Website for a silent short film made in 30 minutes which poked fun at the fanatical culture around Apple\'s AirPods.'
  export const tags = ['front-end', 'digital', 'dev', 'design']
  export const year = 2019
</script>

<script lang='ts'>
  import A from '$lib/components/A.svelte'
  import MediaImg from '$lib/components/MediaImg.svelte'
  import Prose from '$lib/components/Prose.svelte'
  import Subheading from '$lib/components/Subheading.svelte'
</script>

<Prose>
  <h1>{title}</h1>
  <Subheading>{desc}</Subheading>

  <p>
    <A href='http://bp1574.nyuadim.com/30mff'>Website</A>
    (best viewed on desktop)
  </p>

  <MediaImg name='30mff' alt='The Airpod Addiction website.' />
</Prose>
