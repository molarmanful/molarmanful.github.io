import { browser } from '$app/environment'

export default class {
  opts = {
    offset: 120,
    delay: 0,
    easing: 'ease',
    duration: 400,
  }

  on = false

  constructor() {
    if (!browser)
      return

    this.io = new IntersectionObserver(
      (entries) => {
        for (const {
          isIntersecting,
          target,
          boundingClientRect: { top },
        } of entries) {
          const f = (el) => {
            if (isIntersecting || top < 0)
              el.classList.add('aos-animate')
            else el.classList.remove('aos-animate')
          }
          if (target.dataset.aos) {
            f(target)
          }
          else {
            for (const el of document.querySelectorAll(
              `[data-aos-anchor="#${target.id}"]`,
            ))
              f(el)
          }
        }
      },
      { rootMargin: `0% 0% -${this.opts.offset}px` },
    )

    this.mo = new MutationObserver((muts) => {
      for (const { addedNodes, removedNodes, target } of muts) {
        for (const node of [...addedNodes, ...removedNodes]) {
          if (node.dataset?.aos) {
            this.observeAll(target, true)
            break
          }
        }
      }
    })
  }

  init() {
    for (const k of ['duration', 'delay', 'easing'])
      document.body.setAttribute(`data-aos-${k}`, this.opts[k])

    this.mo.observe(document.body, {
      childList: true,
      subtree: true,
      removedNodes: true,
    })

    this.observeAll()
    this.on = true
  }

  observeAll(parent, hard = false) {
    for (const el of (parent || document).querySelectorAll('[data-aos]')) {
      const el1 = el.dataset.aosAnchor
        ? document.querySelector(el.dataset.aosAnchor) || el
        : el
      if (hard)
        this.manual(el1, el)
      this.io.observe(el1)
    }
  }

  manual(a, b) {
    if (a.getBoundingClientRect().top < innerHeight)
      b.classList.add('aos-animate')
    else b.classList.remove('aos-animate')
  }
}
