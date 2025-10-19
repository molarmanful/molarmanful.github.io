<script lang='ts' module>
  export const title = 'ELDUR'
  export const desc =
    '2023. An eccentric bitmap microfont for all your spellcasting needs.'
  export const tags = ['typography', 'design']
  export const year = 2023
</script>

<script lang='ts'>
  import A from '$lib/components/A.svelte'
  import Prose from '$lib/components/Prose.svelte'
  import PxImg from '$lib/components/PxImg.svelte'
  import Subheading from '$lib/components/Subheading.svelte'

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
  <h1>{title}</h1>
  <Subheading>{desc}</Subheading>

  <p><A href='https://github.com/molarmanful/eldur'>Source</A></p>
</Prose>

{#each srcs as [s, a]}
  {@const src = `https://github.com/molarmanful/eldur/raw/main/img/eldur${s}.png`}
  <PxImg alt='{a} sample for the eldur font.' {src} />
{/each}
