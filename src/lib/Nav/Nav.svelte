<script lang='ts'>
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

  import { Body, Icon } from '.'

  import { browser } from '$app/environment'
  import { hexes } from '$lib/js/static'

  if (browser)
    gsap.registerPlugin(ScrollTrigger)

  interface Props {
    tops: string[]
  }

  const { tops = [] }: Props = $props()

  let dropped = $state(false)
  const ON = ({ target }: Event) => {
    dropped = true
    ;(target as HTMLElement).blur()
  }
  const OFF = () => {
    dropped = false
  }
  const GOTO = (top: string) => ({ target }: Event) => {
    scrollTo({ top: document.getElementById(top)?.offsetTop })
    ;(target as HTMLElement).blur()
  }

  const breathe = (node: Element) => {
    const xs = node.querySelectorAll('[data-breathe]')
    const xxs = node.querySelectorAll('[data-breathe-a]')
    const tl = gsap.timeline({
      repeat: -1,
      repeatRefresh: true,
      defaults: {
        duration: 2,
        ease: 'linear',
      },
    })

    gsap.set([...xs, ...xxs], {
      '--breath': '#818cf8',
      'color': `color-mix(in oklab, #818cf8 var(--sfactor), var(--breath))`,
    })

    gsap.fromTo(node, {
      '--sfactor': '0%',
    }, {
      '--sfactor': '100%',
      'scrollTrigger': {
        scrub: 0.5,
        start: 'top top',
        end: '+=100%',
      },
    })

    for (const c of hexes[500]) {
      tl.to(xs, {
        '--breath': c,
      })
      if (xxs.length > 0) {
        tl.to(xxs, {
          '--breath': c,
          'stagger': 0.5,
        }, '<0.5')
      }
    }

    return { destroy: () => tl.kill() }
  }
</script>

<svelte:window
  onkeydown={(e) => {
    if (e.key === 'Escape')
      OFF()
  }}
/>

{#if dropped}
  <button
    class='fixed z-30 screen cursor-initial opacity-0'
    onmousedown={OFF}
    ontouchstart={OFF}
    tabindex='-1'
  >
    Close Navigation
  </button>
{/if}

<nav onmouseenter={ON} onmouseleave={OFF} use:breathe>
  <Icon
    aria-expanded={dropped}
    clazz='fixed flex right-2 top-2 z-30'
    onclick={ON}
  ></Icon>

  {#if dropped}
    <Body
      {GOTO}
      clazz='fixed right-2 top-2 z-40'
      {tops}
    />
  {/if}
</nav>
