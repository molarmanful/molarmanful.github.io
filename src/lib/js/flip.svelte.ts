import { browser } from '$app/environment'
import gsap from 'gsap'
import { Flip as gFlip } from 'gsap/dist/Flip'

export default class Flip {
  batch?: FlipBatch

  constructor(id: string) {
    if (!browser)
      return
    gsap.registerPlugin(gFlip)
    this.batch = gFlip.batch(id)
  }

  flip(opts?: Flip.BatchActionConfig) {
    const act = this.batch?.add({
      getState() {
        return gFlip.getState('[data-flip] > *', {
          simple: true,
        })
      },

      animate(self) {
        gFlip.from(self.state, {
          duration: 0.25,
          simple: true,
        })
      },

      ...opts,
    })

    return () => act?.kill()
  }
}
