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
  } from '../mixins'

  export let D

  onMount(_ => {
    D.update()
  })
</script>

<Prose>
  <Heading>PERFORMING IDENTITY</Heading>
  <Subheading>
    2020 - made in collaboration with Li Cheng and Amy Kang. A concept for a
    virtual exhibition space that displays contemporary Asian art.
  </Subheading>
  <Text>
    <A href="https://bennyboy.tech/exhibit">Website</A> (best viewed with a physical
    keyboard)<br /><A href="https://github.com/molarmanful/exhibit">Source</A>
  </Text>

  <div mt-16 />
  <MediaImg {D} name="exhibit" />
  <MediaImg {D} name="exhibit_desc" />
</Prose>
