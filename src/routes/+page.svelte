<script lang='ts'>
  import { desc } from '#common/meta.js'
  import { title } from '#lib/ts/meta.ts'

  import Covers from './Covers.svelte'
  import Splash from './Splash.svelte'
</script>

<svelte:head>
  <title>{title}</title>
  <meta name='description' content={desc} />
</svelte:head>

<Splash />

<Covers />
