<script context='module'>
  export const desc
    = '2023. An eccentric bitmap microfont for all your spellcasting needs.'
  export const tags = ['typography', 'design']
  export const year = 2023
</script>

<script>
  import { A, Heading, Prose, PxImg, Subheading, Text } from '../mixins'

  const srcs = [
    ['', 'Main'],
    ['-prog', 'Programming test'],
    ['-eng', 'English'],
    ['-lat-multi', 'Multilingual'],
    ['-scala', 'Scala'],
    ['-clojure', 'Clojure'],
    ['-go', 'Golang'],
    ['-svelte', 'Svelte'],
    ['-prettyplain', 'Pretty plain text'],
    ['-mathsci', 'Math and science'],
    ['-box', 'Box drawings'],
    ['-braille', 'Braille'],
  ]
</script>

<Prose>
  <Heading>ELDUR</Heading>
  <Subheading>{desc}</Subheading>
  <Text><A href='https://github.com/molarmanful/eldur'>Source</A></Text>
</Prose>

{#each srcs as [s, a]}
  {@const src = `https://github.com/molarmanful/eldur/raw/main/img/eldur${s}.png`}
  <PxImg alt='{a} sample for the eldur font.' {src} x='1' />
{/each}
