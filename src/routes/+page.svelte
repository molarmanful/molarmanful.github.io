<script lang='ts'>
  import { desc } from '$common/meta'
  import { title } from '$lib/ts/meta'

  import Covers from './Covers.svelte'
  import Splash from './Splash.svelte'
</script>

<svelte:head>
  <title>{title}</title>
  <meta
    name='description'
    content={desc}
  />
</svelte:head>

<Splash />

<Covers />
