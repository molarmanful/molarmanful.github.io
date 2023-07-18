<script>
  import { onMount } from 'svelte'
  import {
    Prose,
    Heading,
    Subheading,
    Text,
    A,
    MediaImg,
    YTVideo,
    Sp,
  } from '../mixins'

  export let D
  export let desc =
    '2020 - made in collaboration with Li Cheng and Amy Kang. A concept for a virtual exhibition space that displays contemporary Asian art.'
  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>PERFORMING IDENTITY</Heading>
  <Subheading>{desc}</Subheading>
  <Text>
    <A href="https://bennyboy.tech/exhibit">Website</A> (best viewed with a physical
    keyboard)<br /><A href="https://github.com/molarmanful/exhibit">Source</A>
  </Text>

  <Sp />
  <MediaImg {D} name="exhibit" />
  <MediaImg {D} name="exhibit_desc" />
</Prose>
