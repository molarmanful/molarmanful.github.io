<script>
  import AOS from 'aos'
  import { setContext } from 'svelte'
  import { classList } from 'svelte-body'

  import { browser } from '$app/environment'
  import About from '$lib/About.svelte'
  import Art from '$lib/Art.svelte'
  import Header from '$lib/Header.svelte'
  import { FocusTrap } from '$lib/js/util.svelte'
  import Modal from '$lib/Modal.svelte'
  import Nav from '$lib/Nav.svelte'

  const tops = $state([])
  const selected = $state({ x: void 0 })
  setContext('selected', selected)

  const { useFocusTrap } = new FocusTrap({
    immediate: true,
    initialFocus: false,
  }).fns

  if (browser) AOS.init()
</script>

<svelte:head>
  <title>Ben Pang / BandidoJim</title>
  <meta
    name="description"
    content="Creative technologist, experimental artist, digital designer, font creator, programming language enthusiast."
  />
</svelte:head>

<svelte:body use:classList={[selected.x && 'overflow-hidden']} />

<div contents use:useFocusTrap>
  <Nav {tops} />
  <Header top={x => (tops[0] = x)} />
  <About top={x => (tops[1] = x)} />
  <Art top={x => (tops[2] = x)} />
  <Modal />
</div>
