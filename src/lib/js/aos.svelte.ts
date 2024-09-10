import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { browser } from '$app/environment'

const trs = {
  'fade-in': [
    { opacity: 0 },
    { opacity: 1 },
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
}

export default class {
  opts: Opts = {
    on: true,
    type: 'fade-in',
    start: 'top bottom -= 120px',
    delay: 0,
    ease: 'ease',
    duration: 400,
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

  aos(node: Element, opts: Partial<Opts> = {}) {
    const { on, type, start, delay, ease, duration, anchor }: Opts = { ...this.opts, ...opts }
    const [from, to] = trs[type]

    if (!on)
      return { destroy: () => { } }

    const tw = gsap.fromTo(node, {
      ...from,
    }, {
      ...to,
      duration: duration / 1000,
      ease,
      delay,
      scrollTrigger: {
        trigger: anchor ? document.getElementById(anchor) : node,
        toggleActions: 'play none none reset',
        start,
      },
    })

    return { destroy: () => tw.kill() }
  }
}
