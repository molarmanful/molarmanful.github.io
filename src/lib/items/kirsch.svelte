<script>
  import { A, Heading, Prose, PxImg, Subheading, Text } from '../mixins'

  export const desc = 'A versatile bitmap font with an organic flair.'

  const s0 = 'https://github.com/molarmanful/kirsch/raw/master/img/header.png'
  const s1 = 'https://github.com/molarmanful/kirsch/raw/master/img/sample.png'
</script>

<Prose>
  <Heading>KIRSCH</Heading>
  <Subheading>{desc}</Subheading>
  <Text><A href="https://github.com/molarmanful/kirsch">Source</A></Text>
</Prose>

<PxImg name="kirsch" a={s0} b={s0} x="1" />
<PxImg name="kirsch sample" a={s1} b={s1} x="1" />
