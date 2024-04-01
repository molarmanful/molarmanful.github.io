<script>
  import { createFocusTrap } from '@grail-ui/svelte'
  import AOS from 'aos'
  import { classList } from 'svelte-body'

  import { browser } from '$app/environment'
  import About from '$lib/About.svelte'
  import Art from '$lib/Art.svelte'
  import Header from '$lib/Header.svelte'
  import Modal from '$lib/Modal.svelte'
  import Nav from '$lib/Nav.svelte'

  let tops = []
  let selected

  if (browser) {
    AOS.init()
  }

  const { useFocusTrap } = createFocusTrap({
    immediate: true,
    initialFocus: false,
  })
</script>

<svelte:head>
  <title>Ben Pang</title>
  <meta
    name="description"
    content="Programmer/artist and graduate student at NYU ITP."
  />
</svelte:head>

<svelte:body use:classList={[selected && 'overflow-hidden']} />

<div contents use:useFocusTrap>
  <Nav {tops} />
  <Header bind:top={tops[0]} />
  <About bind:top={tops[1]} />
  <Art bind:top={tops[2]} bind:selected />
  <Modal bind:selected />
</div>
