<script lang='ts' module>
  export const title = 'SIMIAN'
  export const desc = '2021. Somewhat Interesting Machine with Intelligence of Artificial Nature, a frontend-only train-your-own-chatbot interface that pushed the limits of what was possible in client-side AI at the time.'
  export const tags = ['digital', 'front-end', 'dev', 'design', 'art']
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
    <A href='https://benpa.ng/simian'>Website</A>
    (best viewed with a physical keyboard)
    <br />
    <A href='https://github.com/molarmanful/simian'>Source</A>
  </p>

  <MediaImg name='simian' alt='The SIMIAN web interface.' />
</Prose>
