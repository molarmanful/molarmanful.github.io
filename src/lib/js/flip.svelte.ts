import gsap from 'gsap'
import { Flip } from 'gsap/dist/Flip'

import { browser } from '$app/environment'

export default class {
  batch?: FlipBatch

  constructor(id: string) {
    if (!browser)
      return
    gsap.registerPlugin(Flip)
    this.batch = Flip.batch(id)
  }

  get fns() {
    return {
      flip: this.flip.bind(this),
    }
  }

  flip(node: Element, opts?: Flip.BatchActionConfig) {
    const act = this.batch?.add({
      getState() {
        return Flip.getState(node.children, {
          simple: true,
        })
      },

      animate(self) {
        Flip.from(self.state, {
          absolute: true,
          duration: 0.25,
          simple: true,
        })
      },

      ...opts,
    })

    return { destroy: () => act?.kill() }
  }
}
