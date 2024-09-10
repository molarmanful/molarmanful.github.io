import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { browser } from '$app/environment'

const trs = {
  'fade-in': [
    { opacity: 0 },
    { opacity: 1 },
  ],
  'fade-up': [
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0 },
  ],
  'fade-left': [
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0 },
  ],
  'fade-down': [
    { opacity: 0, y: -100 },
    { opacity: 1, y: 0 },
  ],
  'fade-right': [
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0 },
  ],
} as const satisfies Record<string, [gsap.CSSVars, gsap.CSSVars]>

export interface Opts {
  on: boolean
  type: keyof typeof trs
  start: ScrollTrigger.Vars['start']
  delay: number
  ease: string
  duration: number
  anchor?: string
  scroller?: ScrollTrigger.Vars['scroller']
}

export default class {
  opts: Opts = {
    on: true,
    type: 'fade-in',
    start: 'top bottom-=120px',
    delay: 0,
    ease: 'ease',
    duration: 0.4,
  }

  constructor() {
    if (!browser)
      return
    gsap.registerPlugin(ScrollTrigger)
  }

  get fns() {
    return {
      aos: this.aos.bind(this),
    }
  }

  aos(node: Element, opts: (() => Partial<Opts>) | Partial<Opts> = {}) {
    const opts1 = $derived(typeof opts === 'function' ? opts() : opts)
    const { on, type, start, delay, ease, duration, scroller, anchor }: Opts = $derived({ ...this.opts, ...opts1 })

    $effect(() => {
      const [from, to] = trs[type]

      if (!on)
        return

      const tw = gsap.fromTo(node, {
        ...from,
      }, {
        ...to,
        duration,
        ease,
        delay,
        scrollTrigger: {
          trigger: anchor ? document.querySelector(anchor) : node,
          scroller,
          toggleActions: 'restart none none reverse',
          start,
        },
      })

      return () => tw.kill()
    })
  }
}
