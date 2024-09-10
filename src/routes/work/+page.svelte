<script lang='ts'>
  import { A, CoverImg, Heading, ItemsGrid } from '$lib/components'
  import { cD } from '$lib/js/contexts'

  const { D } = cD.get()
</script>

<svelte:head>
  <title>work | {D.title}</title>
  <meta
    name='description'
    content='Gallery of creative and technical works by Ben Pang, featuring projects in programming, design, multimedia art, and more.'
  />
</svelte:head>

<div class='m-auto w-full p-5 lg:container lg:py-16'>
  <Heading clazz='text-center mb-5 md:mb-8'>WORK</Heading>
  <ItemsGrid aosS='in'>
    {#snippet children(name, on, i: boolean)}
      <A
        class='cover'
        aria-disabled={!on}
        href={on ? `/work/${name}` : void 0}
        role='link'
        t
        tabindex={on ? 0 : void 0}
      >
        <CoverImg {name} alt='Open project entry: {name}.' {i} />
      </A>
    {/snippet}
  </ItemsGrid>
</div>
