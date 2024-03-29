<script>
  import { A, Heading, Prose, PxImg, Subheading, Text } from '../mixins'

  export const desc =
    'An eccentric bitmap microfont for all your spellcasting needs.'

  const srcs = [
    '',
    '-prog',
    '-eng',
    '-lat-multi',
    '-scala',
    '-clojure',
    '-go',
    '-svelte',
    '-prettyplain',
    '-mathsci',
    '-box',
    '-braille',
  ]
</script>

<Prose>
  <Heading>ELDUR</Heading>
  <Subheading>{desc}</Subheading>
  <Text><A href="https://github.com/molarmanful/kirsch">Source</A></Text>
</Prose>

{#each srcs as src}
  {@const s = `https://github.com/molarmanful/eldur/raw/main/img/eldur${src}.png`}
  <PxImg name="eldur{src}" a={s} b={s} x="1" />
{/each}
