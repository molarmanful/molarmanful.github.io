<script lang='ts'>
  import { page } from '$app/state'
  import { desc } from '$common/meta'
  import { About, Art, Header, Modal, Nav } from '$lib'
  import { cD } from '$lib/js/contexts'
  import { FocusTrap } from '$lib/js/util.svelte'

  const { D } = cD.get()

  const { useFocusTrap } = new FocusTrap({
    immediate: true,
    initialFocus: false,
  }).fns

  $effect(() => {
    document.body.classList.toggle('overflow-hidden', !!page.state.selected)
  })
</script>

<svelte:head>
  <title>{D.title}</title>
  <meta
    name='description'
    content={desc}
  />
</svelte:head>

<div class='contents' use:useFocusTrap>
  <Nav />
  <Header />
  <About />
  <Art />
  <Modal selected={page.state.selected} />
</div>
