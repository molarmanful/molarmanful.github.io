<script lang='ts'>
  import A from '#lib/components/A.svelte'
  import MediaImg from '#lib/components/MediaImg.svelte'
  import Prose from '#lib/components/Prose.svelte'
  import Subheading from '#lib/components/Subheading.svelte'
  import { items } from '#lib/ts/items.ts'

  const meta = items.sclin
</script>

<Prose>
  <h1>{meta.title}</h1>
  <Subheading>{meta.desc}</Subheading>
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
