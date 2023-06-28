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
    D.lazy.update()
  })
</script>

<Prose>
  <Heading>THE GENERATIVE COLLECTION</Heading>
  <Subheading>
    From code blossoms art. Works created with autonomous systems to spawn
    infinite variation.
  </Subheading>

  <div mt-16 />
  <MediaImg {D} name="nihilism" />
  <Text>
    Nihilism - <A
      href="https://colab.research.google.com/drive/1DjUw9jp47cCAorEm0pN2cj4_1ksG8hBS?usp=sharing"
      >Source</A
    >
  </Text>

  <div mt-16 />
  <YTVideo x a="w4ff_J_T12k" title="Entanglement" />
  <Text>
    Entanglement - <A href="https://github.com/molarmanful/entanglement"
      >Source</A
    >
  </Text>

  <div mt-16 />
  <YTVideo x a="f_mWTjxUbqk" title="Joy of Abstract Art with Rob Boss" />
  <Text>
    Joy of Abstract Art with Rob Boss - <A
      href="https://github.com/molarmanful/rob-boss">Source</A
    >
  </Text>

  <div mt-16 />
  <MediaImg {D} name="cycle" />
  <Text>
    Bezier Pulse - <A href="https://github.com/molarmanful/bezier-pulse"
      >Source</A
    >
  </Text>
</Prose>
