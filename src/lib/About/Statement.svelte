<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'

  import { A, Subheading, Text } from '$lib/components'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    clazz?: string
  }

  const { clazz = '', ...rest }: Props = $props()
</script>

{#snippet h3(text: string, c = 'text-bord')}
  <h3 class='{c} mt-4 lg:mt-8 bold' data-aos='fade-in'>
    {text}
  </h3>
{/snippet}

<div class='{0} prose {clazz}' {...rest}>
  <Subheading data-aos='fade-in'>
    <span class='text-text-200 bold'>BENJAMIN PANG</span> is a creative
    technologist from the California Bay Area and a graduate of NYU ITP.
  </Subheading>
  {@render h3('JOB')}
  <Text class='mt-1 lg:mt-2' data-aos='fade-in'>
    With extensive hands-on experience in full-stack development, digital
    design, interactive installations, multimedia experiences, and CGI/VFX art,
    his expertise lies in unifying art and tech into balanced, compelling final
    products.
  </Text>
  {@render h3('ART')}
  <Text class='mt-1 lg:mt-2' data-aos='fade-in'>
    Drawing influences from a wide variety of classical and contemporary
    artists, music, digital multimedia, and personal experiences, his artwork
    explores sensory confusion, coping mechanisms, and loneliness in the
    post-digital age.
  </Text>
  {@render h3('NOW')}
  <Text class='mt-1 lg:mt-2' data-aos='fade-in'>
    He is building odd programming languages, designing bitmap fonts, living
    life, and secretly making art.
  </Text>
  <Text clazz='italic text-text-500' data-aos='fade-in'>
    This website is <A
      href='https://github.com/molarmanful/molarmanful.github.io'
    >open-source</A>!
  </Text>
</div>
