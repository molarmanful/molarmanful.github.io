<script context="module">
  export const desc =
    "Weird and wholly impractical. Programming languages which I've made throughout the years for recreational - NOT PRODUCTION - purposes."
  export const tags = ['digital', 'dev', 'proglang', 'collection']
  export const year = 2022
</script>

<script>
  import { A, Heading, Prose, Subheading, Text } from '../mixins'
</script>

<Prose>
  <Heading>CUSTOM LANGUAGES</Heading>
  <Subheading>{desc}</Subheading>

  <Subheading bold>Coding</Subheading>
  <Text>
    No, it's not a typo; the language really is called Coding. Conceived from <A
      href="https://www.reddit.com/r/ProgrammerHumor/comments/5gfomg/til_most_people_go_to_special_training_for_years/"
      >a running joke on r/ProgrammerHumor</A
    >, I quickly cobbled together what one might describe as "stack-based HTML."
  </Text>
  <Text><A href="https://github.com/molarmanful/codinglang">Source</A></Text>

  <Subheading bold>lin</Subheading>
  <Text>
    This was one of my few attempts at creating anything remotely close to a
    practical language. lin was a stack-based functional language which is
    designed to be easily implemented and used, even with its unconventional
    syntax patterns.
  </Text>
  <Text><A href="https://github.com/molarmanful/lin">Source</A></Text>

  <Subheading bold>Wonder</Subheading>
  <Text>
    Another one of my attempts at accommodating some semblance of practicality,
    Wonder was quite ambitious; among other odd features, I worked on a
    rudimentary package manager. It was meant to be an personally ergonomic
    alternative to Haskell, another lazy functional language.
  </Text>
  <Text><A href="https://github.com/wonderlang/wonder">Source</A></Text>

  <Subheading bold>ESMin</Subheading>
  <Text>
    Optimized for code-golfing, ESMin sacrificed a standard 256-character code
    page for a larger 1024-character code page. This served as a compromise
    between program byte size and language robustness. The result, however, was
    an absolute mess of a language which no longer works due to browser updates
    over the years.
  </Text>
  <Text><A href="https://github.com/molarmanful/esmin">Source</A></Text>

  <Subheading bold>RETURN</Subheading>
  <Text>
    RETURN was an extension of DUP, a barebones stack-based esolang. Its purpose
    was to make DUP more viable for code challenges by adding more commands and
    stacks.
  </Text>
  <Text><A href="https://github.com/molarmanful/RETURN">Source</A></Text>

  <Subheading bold>bitman</Subheading>
  <Text>
    bitman was another offshoot of DUP made specifically to manipulate bits. Its
    main feature was its ability to store arbitrary bit sizes, theoretically
    allowing for things like bignumber math.
  </Text>
  <Text><A href="https://github.com/molarmanful/bitman">Source</A></Text>
</Prose>
