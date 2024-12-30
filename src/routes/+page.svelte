<script lang='ts'>
  import { browser } from '$app/environment'
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

  const selected = $derived.by<App.PageState['selected']>(() => {
    if (!browser)
      return

    ((_) => {})(page.state)
    return history.state?.['sveltekit:states']?.selected
  })

  $effect(() => {
    document.body.classList.toggle('overflow-hidden', !!selected)
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
  <Modal {selected} />
</div>
