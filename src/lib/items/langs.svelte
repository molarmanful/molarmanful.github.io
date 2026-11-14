<script lang='ts'>
  import A from '#lib/components/A.svelte'
  import Miniheading from '#lib/components/Miniheading.svelte'
  import Prose from '#lib/components/Prose.svelte'
  import Subheading from '#lib/components/Subheading.svelte'
  import { items } from '#lib/ts/items.ts'

  const meta = items.langs
</script>

<Prose>
  <h1>{meta.title}</h1>
  <Subheading>{meta.desc}</Subheading>

  <Miniheading>Coding</Miniheading>
  <p>
    No, it's not a typo; the language really is called Coding. Conceived from
    <A
      href='https://www.reddit.com/r/ProgrammerHumor/comments/5gfomg/til_most_people_go_to_special_training_for_years/'
    >a running joke on r/ProgrammerHumor</A>, I quickly cobbled together what
    one might describe as "stack-based HTML."
  </p>
  <p><A href='https://github.com/molarmanful/codinglang'>Source</A></p>

  <Miniheading>lin</Miniheading>
  <p>
    This was one of my first attempts at creating anything remotely close to a
    practical language. lin was a stack-based functional language which was
    designed to be easily implemented and used, even with its unconventional
    syntax patterns.
  </p>
  <p><A href='https://github.com/molarmanful/lin'>Source</A></p>

  <Miniheading>Wonder</Miniheading>
  <p>
    Another one of my attempts at accommodating some semblance of practicality,
    Wonder was quite ambitious; among other odd features, I worked on a
    rudimentary package manager. It was meant to be an personally ergonomic
    alternative to Haskell, another lazy functional language.
  </p>
  <p><A href='https://github.com/wonderlang/wonder'>Source</A></p>

  <Miniheading>ESMin</Miniheading>
  <p>
    Optimized for code-golfing, ESMin sacrificed a standard 256-character code
    page for a larger 1024-character code page. This served as a compromise
    between program byte size and language robustness. The result, however, was
    an absolute mess of a language which no longer works due to browser updates
    over the years.
  </p>
  <p><A href='https://github.com/molarmanful/esmin'>Source</A></p>

  <Miniheading>RETURN</Miniheading>
  <p>
    RETURN was an extension of DUP, a barebones stack-based esolang. Its purpose
    was to make DUP more viable for code challenges by adding more commands and
    stacks.
  </p>
  <p><A href='https://github.com/molarmanful/RETURN'>Source</A></p>

  <Miniheading>bitman</Miniheading>
  <p>
    bitman was another offshoot of DUP made specifically to manipulate bits. Its
    main feature was its ability to store arbitrary bit sizes, theoretically
    allowing for things like bignumber math.
  </p>
  <p><A href='https://github.com/molarmanful/bitman'>Source</A></p>
</Prose>
