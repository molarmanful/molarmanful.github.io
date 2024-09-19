import { browser } from '$app/environment'
import gsap from 'gsap'

import { Flip } from 'gsap/dist/Flip'

export default class {
  batch?: FlipBatch

  constructor(id: string) {
    if (!browser)
      return
    gsap.registerPlugin(Flip)
    this.batch = Flip.batch(id)
  }

  flip(opts?: Flip.BatchActionConfig) {
    const act = this.batch?.add({
      getState() {
        return Flip.getState('[data-flip] > *', {
          simple: true,
        })
      },

      animate(self) {
        Flip.from(self.state, {
          duration: 0.25,
          simple: true,
        })
      },

      ...opts,
    })

    return () => act?.kill()
  }
}
