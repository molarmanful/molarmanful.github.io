import type { FocusTrap as FTType, Options } from 'focus-trap'

import { createFocusTrap } from 'focus-trap'

interface Opts extends Options {
  immediate?: boolean
}

export default class FocusTrap {
  #config: Opts
  #trap?: FTType
  #hasFocus = $state(false)
  #isPaused = $state(false)

  constructor(config: Opts = {}) {
    this.#config = config
  }

  get fns() {
    return {
      useFocusTrap: this.useFocusTrap.bind(this),
      activate: this.activate.bind(this),
      deactivate: this.deactivate.bind(this),
      pause: this.pause.bind(this),
      unpause: this.unpause.bind(this),
    }
  }

  useFocusTrap(node: HTMLElement) {
    const { immediate, ...opts } = this.#config

    this.#trap = createFocusTrap(node, {
      ...opts,
      onActivate: () => {
        this.#hasFocus = true
        this.#config.onActivate?.()
      },
      onDeactivate: () => {
        this.#hasFocus = false
        this.#config.onDeactivate?.()
      },
    })

    if (immediate) {
      this.activate()
    }

    return {
      destroy: () => {
        this.deactivate()
        this.#trap = void 0
      },
    }
  }

  get hasFocus() {
    return this.#hasFocus
  }

  get isPaused() {
    return this.#isPaused
  }

  activate() {
    this.#trap?.activate()
  }

  deactivate() {
    this.#trap?.deactivate()
  }

  pause() {
    if (this.#trap) {
      this.#trap.pause()
      this.#isPaused = true
    }
  }

  unpause() {
    if (this.#trap) {
      this.#trap.unpause()
      this.#isPaused = false
    }
  }
}
