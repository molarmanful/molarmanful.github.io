<script lang='ts' module>
  export const meta = {
    title: '10K IPS',
    desc:
      "2020 - Made in collaboration with Leo El-Azhab and Mai Khaled. Data visualization of the UAE's ISPs and their constituent IP addresses to provoke discussions about net neutrality and security.",
    tags: ['digital', 'front-end', 'dev', 'data-sci', 'art'],
    year: 2020,
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
    <A href='https://benpa.ng/ipisp'>Website</A>
    <br />
    <A href='https://github.com/molarmanful/ipisp'>Source</A>
  </p>

  <MediaImg name='ipisp' alt='The 10k IPs website.' />
</Prose>
