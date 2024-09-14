<svelte:options namespace='svg' />

<script lang='ts'>
  import gsap from 'gsap'

  import type { El } from '$lib/js/me'
  import { hexes } from '$lib/js/static'

  interface Props {
    el: El
  }

  const { el, ...rest }: Props = $props()

  const anim = (node: Element) => {
    gsap.set(node, {
      color: '#000',
      strokeDasharray: el.len,
      strokeDashoffset: el.len,
    })

    const f = (delay: number) => {
      gsap.to(node, {
        strokeDashoffset: 0,
        color: gsap.utils.random(hexes[500]),
        delay,
        duration: gsap.utils.random(1, 4),
        ease: delay > 0 ? 'ease-out' : 'ease',
        onComplete() {
          f(0)
        },
      })
    }
    f(1)
  }
</script>

<svelte:element
  this={el.this}
  class='fill-transparent stroke-1 stroke-current text-transparent'
  use:anim
  {...el.attr}
  {...rest}
/>
