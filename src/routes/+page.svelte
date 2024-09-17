<script lang='ts'>
  import { derived } from 'svelte/store'
  import { classList } from 'svelte-body'

  import { browser } from '$app/environment'
  import { page } from '$app/stores'
  import { desc } from '$common/meta'
  import { About, Art, Header, Modal, Nav } from '$lib'
  import { cD } from '$lib/js/contexts'
  import { FocusTrap } from '$lib/js/util.svelte'

  const { D } = cD.get()

  const { useFocusTrap } = new FocusTrap({
    immediate: true,
    initialFocus: false,
  }).fns

  const pstate = derived<typeof page, App.PageState>(
    page,
    ($page, set) => {
      if (!browser)
        return
      set(history.state['sveltekit:states'] ?? {})
    },
    {},
  )
</script>

<svelte:head>
  <title>{D.title}</title>
  <meta
    name='description'
    content={desc}
  />
</svelte:head>

<svelte:body use:classList={[$pstate.selected && 'overflow-hidden']} />

<div class='contents' use:useFocusTrap>
  <Nav />
  <Header />
  <About />
  <Art />
  <Modal selected={$pstate.selected} />
</div>
