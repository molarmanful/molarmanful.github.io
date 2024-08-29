<script lang='ts'>
  import { derived } from 'svelte/store'
  import { classList } from 'svelte-body'

  import { browser } from '$app/environment'
  import { page } from '$app/stores'
  import About from '$lib/About.svelte'
  import Art from '$lib/Art.svelte'
  import Header from '$lib/Header.svelte'
  import { cD } from '$lib/js/contexts'
  import { FocusTrap } from '$lib/js/util.svelte'
  import Modal from '$lib/Modal.svelte'
  import Nav from '$lib/Nav.svelte'

  const { D, aos } = cD.get()

  const tops: string[] = $state([])

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

  $effect(() => {
    aos.init()
  })
</script>

<svelte:head>
  <title>{D.title}</title>
  <meta
    name='description'
    content='Creative technologist, experimental artist, digital designer, font creator, programming language enthusiast.'
  />
</svelte:head>

<svelte:body use:classList={[$pstate.selected && 'overflow-hidden']} />

<div contents use:useFocusTrap>
  <Nav {tops} />
  <Header top={(x: string) => (tops[0] = x)} />
  <About top={(x: string) => (tops[1] = x)} />
  <Art top={(x: string) => (tops[2] = x)} />
  <Modal selected={$pstate.selected} />
</div>
