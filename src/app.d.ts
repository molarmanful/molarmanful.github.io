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
    interface HTMLAttributes { }
  }

  namespace Aos {
    interface Props {
      aoso?: Partial<Opts>
    }
  }

  interface DContext {
    D: typeof D
    loaded: { x: boolean }
    actives: { x: SvelteSet<string> }
    factor: { x: number }
    fo?: MediaQuery
    rm?: MediaQuery
    aos: AOS['aos']
    cursorFs: {
      on: (e: MouseEvent) => void
      off: () => void
    }
  }
}

export { }
