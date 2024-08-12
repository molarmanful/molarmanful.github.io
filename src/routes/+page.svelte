<script>
  import AOS from 'aos'
  import { classList } from 'svelte-body'

  import { page } from '$app/stores'
  import About from '$lib/About.svelte'
  import Art from '$lib/Art.svelte'
  import Header from '$lib/Header.svelte'
  import { FocusTrap } from '$lib/js/util.svelte'
  import Modal from '$lib/Modal.svelte'
  import Nav from '$lib/Nav.svelte'

  const tops = $state([])

  const { useFocusTrap } = new FocusTrap({
    immediate: true,
    initialFocus: false,
  }).fns

  $effect(() => {
    AOS.init()
  })
</script>

<svelte:head>
  <title>Ben Pang / BandidoJim</title>
  <meta
    name="description"
    content="Creative technologist, experimental artist, digital designer, font creator, programming language enthusiast."
  />
</svelte:head>

<svelte:body use:classList={[$page.state.selected && 'overflow-hidden']} />

<div contents use:useFocusTrap>
  <Nav {tops} />
  <Header top={x => (tops[0] = x)} />
  <About top={x => (tops[1] = x)} />
  <Art top={x => (tops[2] = x)} />
  <Modal
    selected={$page.state.selected || $page.url.searchParams.get('item')}
  />
</div>
