import { MediaQuery, useEventListener } from 'runed'
import { getContext, setContext } from 'svelte'

import { browser } from '$app/environment'

export { default as FocusTrap } from './FocusTrap.svelte'

export const sfactor = (f: (x: number) => void) => {
  if (!browser)
    return

  let stop = false
  const g = () => {
    if (stop)
      return
    stop = true
    f(scrollY / innerHeight || 0)
    setTimeout(() => (stop = false), 50)
  }

  useEventListener(window, 'scroll', g)
  useEventListener(window, 'resize', g)
}

export const clickout = (node: Element, { f = (_?: Event) => {} }) => {
  if (!browser)
    return

  const g = (e: Event) => {
    if (node && !node.contains(e.target as Node | null) && !e.defaultPrevented)
      f(e)
  }

  useEventListener(document.body, 'click', g)
}

export const fadeonly = () =>
  browser && new MediaQuery('(hover: none), (prefers-reduced-motion: reduce)')

export const redmote = () =>
  browser && new MediaQuery('(prefers-reduced-motion: reduce)')

export const artalt = (name: string) => `Artwork: "${name}" by BandidoJim.`

interface Context<T> {
  get: () => T
  set: (v: T) => void
}

export const context = <T>(s: string): Context<T> => {
  const k = Symbol(s)
  return {
    get: () => getContext(k),
    set: v => setContext(k, v),
  }
}
