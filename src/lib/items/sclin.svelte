<script lang='ts' module>
  export const title = 'SCLIN'
  export const desc =
    '2024. Functional and array programming paradigms packaged into a stack-based language. Tuned for maximum expressiveness. Features a web-based interpreter and tree-sitter grammar.'
  export const tags = [
    'digital',
    'dev',
    'proglang',
    'front-end',
    'back-end',
    'full-stack',
    'design',
  ]
  export const year = 2024
</script>

<script lang='ts'>
  import A from '$lib/components/A.svelte'
  import MediaImg from '$lib/components/MediaImg.svelte'
  import Prose from '$lib/components/Prose.svelte'
  import Subheading from '$lib/components/Subheading.svelte'
</script>

<Prose>
  <h1>{title}</h1>
  <Subheading>{desc}</Subheading>
  <p>
    <A href='https://scline.fly.dev'>Online Interpreter</A>
    <br />
    <A href='https://github.com/molarmanful/sclin'>Source</A>
  </p>

  <MediaImg
    name='sclin_code'
    alt='sclin code for generating an ASCII Mandelbrot set.'
  />
  <MediaImg
    name='sclin_mandelbrot'
    alt='Terminal output of the sclin ASCII Mandelbrot generator.'
  />
  <MediaImg
    name='scline'
    alt='Web interface of scline, the online interpreter for sclin.'
  />
</Prose>
