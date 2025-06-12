<script lang='ts' module>
  export const title = 'VIOLET VENTURES'
  export const desc = '2021. Logo and brand identity for a student-oriented VC fund at NYUAD.'
  export const tags = ['branding', 'design']
  export const year = 2021
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
    <A href='https://www.figma.com/design/ZjsqZfDeTUMQLtFFgoDzTg/Logo-Color-Tests?node-id=0-1&t=JcY5bpPQAfCSU6VQ-1'>
      Figma
    </A>
  </p>

  <MediaImg name='vv_concept' alt='Violet Ventures logo statement.' />
  <MediaImg
    name='vv_knockout'
    alt='Sample of the Violet Ventures branding and color palette.'
  />
</Prose>
