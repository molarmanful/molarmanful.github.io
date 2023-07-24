<script>
  import AOS from 'aos'
  import { setContext } from 'svelte'
  import { classList } from 'svelte-body'
  import LazyLoad from 'vanilla-lazyload'

  import { browser } from '$app/environment'
  import About from '$lib/About.svelte'
  import Art from '$lib/Art.svelte'
  import Header from '$lib/Header.svelte'
  import D from '$lib/js/D'
  import Modal from '$lib/Modal.svelte'
  import Nav from '$lib/Nav.svelte'

  let tops = []
  let selected

  if (browser) {
    AOS.init()
    D.lazy = new LazyLoad({
      callback_loaded() {
        AOS.refresh()
      },
    })
    D.update = () => {
      D.lazy.update()
    }
  }

  setContext('D', D)
</script>

<svelte:head>
  <title>Ben Pang</title>
  <meta
    name="description"
    content="Programmer/artist and graduate student at NYU ITP."
  />
</svelte:head>

<svelte:body use:classList={[selected && 'overflow-hidden']} />

<Nav {tops} />
<Header bind:top={tops[0]} />
<About bind:top={tops[1]} />
<Art bind:top={tops[2]} bind:selected />
<Modal bind:selected />
