import { browser } from '$app/environment'

interface Opts {
  offset: number
  delay: number
  easing: string
  duration: number
}

export default class {
  opts: Opts = {
    offset: 120,
    delay: 0,
    easing: 'ease',
    duration: 400,
  }

  on = false
  io?: IntersectionObserver
  mo?: MutationObserver

  constructor(opts = {}) {
    if (!browser)
      return

    Object.assign(this.opts, opts)

    this.io = new IntersectionObserver((entries) => {
      for (const { isIntersecting, target, boundingClientRect: { top } } of entries) {
        const f = (el: Element) => {
          if (isIntersecting || top < 0)
            el.classList.add('aos-animate')
          else el.classList.remove('aos-animate')
        }
        if ((target as HTMLElement).dataset.aos) {
          f(target)
          continue
        }
        for (const el of document.querySelectorAll(
          `[data-aos-anchor="#${target.id}"]`,
        ))
          f(el)
      }
    }, {
      rootMargin: `0% 0% -${this.opts.offset}px`,
    })

    this.mo = new MutationObserver((muts) => {
      for (const { addedNodes, removedNodes, target } of muts) {
        const nodes = [...addedNodes, ...removedNodes] as HTMLElement[]
        for (const node of nodes) {
          if (!node.dataset?.aos)
            continue
          this.observeAll(target as Element, true)
          break
        }
      }
    })
  }

  init() {
    const ks: (keyof Opts)[] = ['duration', 'delay', 'easing']
    for (const k of ks)
      document.body.setAttribute(`data-aos-${k}`, `${this.opts[k]}`)

    this.mo?.observe(document.body, {
      childList: true,
      subtree: true,
    })

    this.observeAll()
    this.on = true
  }

  observeAll(parent?: Element, hard = false) {
    const els: NodeListOf<HTMLElement> = (parent ?? document).querySelectorAll('[data-aos]')
    for (const el of els) {
      const el1 = el.dataset.aosAnchor
        ? document.querySelector(el.dataset.aosAnchor) ?? el
        : el
      if (hard)
        this.manual(el1, el)
      this.io?.observe(el1)
    }
  }

  manual(a: Element, b: Element) {
    if (a.getBoundingClientRect().top < innerHeight) {
      b.classList.add('aos-animate')
      return
    }
    b.classList.remove('aos-animate')
  }
}
