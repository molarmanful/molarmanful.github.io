<script>
  import { onMount } from 'svelte'
  import { Prose, Heading, Subheading, Text, A, MediaImg, Sp } from '../mixins'

  export let D
  export let desc =
    '2021. Somewhat Interesting Machine with Intelligence of Artificial Nature, a frontend-only train-your-own-chatbot interface that pushes the limits of what is possible in client-side AI.'

  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>SIMIAN</Heading>
  <Subheading>{desc}</Subheading>
  <Text>
    <A href="https://bennyboy.tech/simian">Website</A> (best viewed with a physical
    keyboard)
    <br />
    <A href="https://github.com/molarmanful/simian">Source</A>
  </Text>

  <Sp />
  <MediaImg {D} name="simian" />
</Prose>
