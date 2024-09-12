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
  delay: gsap.TweenVars['delay']
  ease: gsap.TweenVars['ease']
  duration: gsap.TweenVars['duration']
  trigger?: gsap.DOMTarget
  scroller?: ScrollTrigger.Vars['scroller']
}

export interface BatchOpts extends Opts {
  stagger: gsap.TweenVars['stagger']
  all: boolean
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

  bopts: BatchOpts = {
    ...this.opts,
    stagger: 0,
    all: false,
  }

  constructor() {
    if (!browser)
      return
    gsap.registerPlugin(ScrollTrigger)
  }

  get fns() {
    return {
      aos: this.aos.bind(this),
      batch: this.batch.bind(this),
    }
  }

  aos(node: Element, opts: Partial<Opts> = {}) {
    const {
      on,
      type,
      start,
      delay,
      ease,
      duration,
      scroller,
      trigger,
    }: Opts = { ...this.opts, ...opts }
    const [from, to] = $derived(trs[type])

    if (!on)
      return

    const tw = gsap.fromTo(node, { ...from }, {
      ...to,
      duration,
      ease,
      delay,
      scrollTrigger: {
        trigger: trigger ?? node,
        scroller,
        toggleActions: 'restart none none reverse',
        start,
      },
    })

    return { destroy: () => tw.kill() }
  }

  batch(node: Element, opts: Partial<BatchOpts> = {}) {
    const {
      on,
      all,
      type,
      start,
      ease,
      duration,
      stagger,
      scroller,
    }: BatchOpts = $derived({ ...this.bopts, ...opts })
    const [from, to] = $derived(trs[type])

    if (!on)
      return

    const xs = node.querySelectorAll('[data-batch]')
    gsap.set(xs, { ...from })

    const sts = ScrollTrigger.batch(xs, {
      onEnter(batch) {
        if (all) {
          for (const el of batch)
            gsap.to(el, { ...to, duration, stagger, ease })
          return
        }
        gsap.to(batch, { ...to, duration, stagger, ease })
      },
      onLeaveBack(batch) {
        gsap.to(batch, { ...from, duration, stagger, ease })
      },
      scroller,
      start,
    })

    return {
      destroy() {
        for (const st of sts) st.kill()
      },
    }
  }
}
