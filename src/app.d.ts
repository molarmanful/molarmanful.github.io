import type { MediaQuery } from 'runed'
import type { SvelteSet } from 'svelte/reactivity'

import type AOS from '$lib/js/aos.svelte'
import type D from '$lib/js/D'

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    interface PageState {
      selected?: string
    }
    // interface Platform {}
  }

  declare namespace svelteHTML {
    interface HTMLAttributes {}
  }

  interface Mouse {
    x: number
    y: number
    px: number
    py: number
    stop: boolean
    on: boolean
  }

  interface DContext {
    D: typeof D
    loaded: { x: boolean }
    actives: { x: SvelteSet<string> }
    factor: { x: number }
    fo?: MediaQuery
    rm?: MediaQuery
    vloader?: IntersectionObserver
    aos: AOS
    mouse: Mouse
    cursorFs: {
      on: () => void
      off: () => void
    }
  }
}

export {}
