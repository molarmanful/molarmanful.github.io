<script lang='ts' module>
  export const desc = '2022. An interactive installation in which generative visuals react in realtime to brain activity read from an EEG headset.'
  export const tags = ['3d', 'physical', 'digital', 'art', 'iot']
  export const year = 2022
</script>

<script lang='ts'>
  import {
    A,
    Heading,
    MediaImg,
    Prose,
    Sp,
    Subheading,
    Text,
    YTVideo,
  } from '$lib/components'
</script>

<Prose>
  <Heading>ENCEPHALO<wbr />PRINTS</Heading>
  <Subheading>{desc}</Subheading>
  <Text><A href='https://benpa.ng/capstone'>Devblog</A></Text>
  <Text>
    Throughout the day, our mind flows between different states of focus,
    distraction, stress, relaxation, and so on. How the mind flows between
    these mental states can be affected by external or internal stimuli; each
    person has their own unique way of falling in and out of these states.
  </Text>
  <Text>
    We never really get the chance to see our minds' flowing patterns; instead,
    we express our mental state through facial expressions, body language,
    verbal cues, and physical actions. <em>Encephaloprints</em> provided users
    with the opportunity to see just how similar yet unique each person's mind
    can be.
  </Text>

  <Sp />
  <MediaImg
    name='enc3'
    alt='Installation space for the Encephaloprints exhibit.'
  />
  <MediaImg name='enc4' alt='Encephaloprints exhibit on opening night.' />
  <MediaImg
    name='enc1'
    alt='Visitor interfacing with the Encephaloprints exhibition via EEG headband.'
  />
  <MediaImg
    name='enc2'
    alt='Visitor interfacing with the Encephaloprints exhibition via EEG headband.'
  />
  <YTVideo a='JNYylaVTg4s' title='Encephaloprints' />
  <YTVideo a='KRco3BU-Rzs' title='Encephaloprints' />
</Prose>
