<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, Text, A, MediaImg } from '../mixins'

  export let D
  export let desc =
    '2020. An e-magazine from a hypothetical future in which thought-based communication is made possible via brain implants.'

  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>MINDREADER'S DIGEST</Heading>
  <Subheading>{desc}</Subheading>
  <Text>
    <A href="https://bennyboy.tech/mindreaders-digest">Website</A> (best viewed with
    a physical keyboard)
    <br />
    <A href="https://github.com/molarmanful/mindreaders-digest">Source</A>
  </Text>

  <div mt-16 />
  <MediaImg {D} name="mindreader" />
  <MediaImg {D} name="mindreader-desc" />
  <MediaImg {D} name="mindreader-article" />
</Prose>
