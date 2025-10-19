<script lang='ts' module>
  export const title = 'PERFORMING IDENTITY'
  export const desc =
    '2020 - made in collaboration with Li Cheng and Amy Kang. A concept for a virtual exhibition space that displays contemporary Asian art.'
  export const tags = ['digital', 'front-end', 'dev', 'design', 'art']
  export const year = 2020
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
    <A href='https://benpa.ng/exhibit'>Website</A>
    (best viewed with a physical keyboard)
    <br />
    <A href='https://github.com/molarmanful/exhibit'>Source</A>
  </p>

  <MediaImg
    name='exhibit'
    alt='The Performing Identity virtual exhibit space.'
  />
  <MediaImg
    name='exhibit_desc'
    alt='Description of the Performing Identity exhibit.'
  />
</Prose>
