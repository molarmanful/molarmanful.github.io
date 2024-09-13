<script lang='ts'>
  import { Links, Statement, Title } from '.'

  import { Section } from '$lib/components'
</script>

<Section bord nav='abt'>
  <div class='mx-auto w-screen b-bord pt-8 lg:container 3xl:(b-l b-t) md:(px-8 pt-16) xl:px-16'>
    <div class='prose lt-lg:mx-auto lt-lg:max-w-prose'>
      <Title />
    </div>

    <div class='pb-16 lg:(flex pb-32 divide-x) divide-bord'>
      <Statement clazz='max-w-prose px-2 lt-lg:mx-auto 2xl:max-w-80ch' />

      <Links clazz='mx-auto mt-8 max-w-prose px-6 lg:(ml-auto mr-unset mt-12 px-8) md:px-0' />
    </div>
  </div>
</Section>
