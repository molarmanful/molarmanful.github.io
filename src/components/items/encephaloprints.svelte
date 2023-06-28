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
  <Heading>ENCEPHALO PRINTS</Heading>
  <Subheading>
    An interactive installation in which generative visuals react in realtime to
    brain activity read from an EEG headset.
  </Subheading>
  <Text><A href="https://bennyboy.tech/capstone">Devblog</A></Text>
  <Text>
    Throughout the day, our mind flows between different states of focus,
    distraction, stress, relaxation, and so on. How the mind flows between these
    mental states can be affected by external or internal stimuli; each person
    has their own unique way of falling in and out of these states.
  </Text>
  <Text>
    We never really get the chance to see our minds' flowing patterns; instead,
    we express our mental state through facial expressions, body language,
    verbal cues, and physical actions. <em>Encephaloprints</em> provided users with
    the opportunity to see just how similar yet unique each person's mind can be.
  </Text>

  <div mt-8 />
  <MediaImg {D} name="enc3" />
  <MediaImg {D} name="enc4" />
  <MediaImg {D} name="enc1" />
  <MediaImg {D} name="enc2" />
  <YTVideo x a="JNYylaVTg4s" title="Encephaloprints" />
  <div mt-8 />
  <YTVideo x a="KRco3BU-Rzs" title="Encephaloprints" />
</Prose>
