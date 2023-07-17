<script>
  import { getContext } from 'svelte'
  import { classList } from 'svelte-body'
  import AOS from 'aos'
  import Filters from '$lib/Filters.svelte'
  import Nav from '$lib/Nav.svelte'
  import Header from '$lib/Header.svelte'
  import Art from '$lib/Art.svelte'
  import About from '$lib/About.svelte'
  import Modal from '$lib/Modal.svelte'
  import LazyLoad from 'vanilla-lazyload'
  import D from '$lib/js/D'
  import { browser } from '$app/environment'

  let tops = []
  let selected

  getContext('scan').set(true)

  if (browser) {
    AOS.init()
    D.lazy = new LazyLoad({
      callback_loaded() {
        AOS.refresh()
      },
    })
    D.update = _ => {
      D.lazy.update()
    }
  }
</script>

<svelte:head>
  <title>Ben Pang</title>
  <meta
    name="description"
    content="Programmer/artist and graduate student at NYU ITP."
  />
</svelte:head>

<svelte:body use:classList={[selected && 'overflow-hidden']} />

<Filters />
<Nav {tops} />
<Header bind:top={tops[0]} />
<About bind:top={tops[1]} />
<Art bind:top={tops[2]} bind:selected {D} />
<Modal bind:selected {D} />
