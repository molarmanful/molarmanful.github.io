<script>
  import { classList } from 'svelte-body'
  import { browser } from '$app/environment'
  import AOS from 'aos'
  import Nav from '$lib/Nav.svelte'
  import Header from '$lib/Header.svelte'
  import Art from '$lib/Art.svelte'
  import About from '$lib/About.svelte'
  import Modal from '$lib/Modal.svelte'
  import LazyLoad from 'vanilla-lazyload'
  import D from '$lib/js/D'

  let tops = []
  let selected
  let scrollY
  let innerHeight

  if (browser) {
    AOS.init()
    D.lazy = new LazyLoad({
      callback_loaded(e) {
        AOS.refresh()
      },
    })
    D.update = _ => {
      D.lazy.update()
    }
  }

  $: D.factor = Math.max(0, scrollY / innerHeight)

  D.colors = {
    400: [
      'text-pink-400',
      'text-red-400',
      'text-yellow-400',
      'text-teal-400',
      'text-cyan-400',
      'text-purple-400',
    ],
    500: [
      'text-pink-500',
      'text-red-500',
      'text-yellow-500',
      'text-teal-500',
      'text-cyan-500',
      'text-purple-500',
    ],
  }
  D.randc = b => D.colors[b][0 | (Math.random() * D.colors[b].length)]
</script>

<svelte:window bind:scrollY bind:innerHeight />

<svelte:head>
  <title>Ben Pang</title>
  <meta
    name="description"
    content="Programmer/artist and graduate student at NYU ITP."
  />
</svelte:head>

<svelte:body use:classList={[selected && 'overflow-hidden']} />

<Nav {D} {tops} />
<Header {D} bind:top={tops[0]} />
<About bind:top={tops[1]} />
<Art {D} bind:top={tops[2]} bind:selected />
<Modal {D} bind:selected />
