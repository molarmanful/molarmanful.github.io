<script lang='ts'>
  import A from '#lib/components/A.svelte'
  import Prose from '#lib/components/Prose.svelte'
  import PxImg from '#lib/components/PxImg.svelte'
  import Subheading from '#lib/components/Subheading.svelte'
  import { items } from '#lib/ts/items.ts'

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

  const meta = items.eldur
</script>

<Prose>
  <h1>{meta.title}</h1>
  <Subheading>{meta.desc}</Subheading>

  <p><A href='https://github.com/molarmanful/eldur'>Source</A></p>
</Prose>

{#each srcs as [s, a] (s)}
  {@const src = `https://github.com/molarmanful/eldur/raw/main/img/eldur${s}.png`}
  <PxImg alt='{a} sample for the eldur font.' {src} />
{/each}
