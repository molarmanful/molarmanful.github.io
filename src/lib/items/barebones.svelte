<script lang='ts' module>
  export const desc = '2024. A web art piece centered around the premise of an anti-social, self-destructive website.'
  export const tags = ['front-end', 'digital', 'dev', 'art']
  export const year = 2024
</script>

<script lang='ts'>
  import { A, Heading, MediaImg, Prose, Sp, Subheading, Text } from '$lib/components'
</script>

<Prose>
  <Heading>BAREBONES</Heading>
  <Subheading>{desc}</Subheading>
  <Text>
    <A href='https://benpa.ng/barebones'>Website</A>
    <br />
    <A href='https://github.com/molarmanful/barebones'>Source</A>
  </Text>
  <Text>
    When I initially began learning to make websites as a middle schooler,
    websites were pretty much only made with HTML, CSS, JS, and some libraries
    on the side. As a beginner, being able to simply open the browser devtools
    and poke around in the website source code of even the largest companies
    was integral to my development as a budding programmer. What I saw was
    &mdash; more or less &mdash; what the original web developer saw.
  </Text>
  <Text>
    But then came the introduction of libraries, frameworks, transpilers
    &mdash; React, Angular, Typescript, Vite, JSX, Babel, etc. &mdash; which
    sought to address the shortcomings of existing web standards and frontend
    practices. As a side effect, however, websites slowly became these bloated
    cross-platform behemoths, held together by... Javascript? No longer was I
    able to just open the devtools and poke around; what I saw was
    machine-generated and regenerated to the point of illegibility.
  </Text>
  <Text>
    <em>barebones</em> sprouted from the various conflicting feelings I have towards the
    state of modern web development. It is a website that ceaselessly destroys
    and regenerates itself, looping between activity and reactivity. It is a
    website that openly wears its "bones" on its "body," yet is still woefully
    incomprehensible. One viewer of the website described it as "anti-social;"
    another called it an "eldritch abomination."
  </Text>
  <Text>
    <em>barebones</em> is built with Sveltekit + UnoCSS. In many ways, the behavior of
    the website is heavily reliant on Sveltekit's compilation, reactivity, and
    component features. Displaying of the "bones" (code annotations) was
    achieved with hacky combinations of CSS pseudo-elements, JS fetches, and
    some Svelte glue. Although I took measures to optimize
    performance/caching/loading times, the sheer amount of dynamic data
    rendering and re-rendering may potentially make the website difficult to
    view on anything less performant than a laptop/desktop.
  </Text>

  <Sp />
  <MediaImg name='barebones' alt='The barebones website.' />
</Prose>
