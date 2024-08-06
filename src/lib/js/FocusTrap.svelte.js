import { createFocusTrap as cft } from 'focus-trap'

export default class {
  #config
  #trap
  #hasFocus = $state(false)
  #isPaused = $state(false)

  constructor(config = {}) {
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

  useFocusTrap(node) {
    const { immediate, ...opts } = this.#config

    this.#trap = cft(node, {
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

  activate(opts) {
    this.#trap.activate(opts)
  }

  deactivate(opts) {
    this.#trap.deactivate(opts)
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
