import { browser } from '$app/environment'
import { useEventListener } from 'runed'
import { MediaQuery } from 'svelte/reactivity'

export { default as FocusTrap } from './FocusTrap.svelte'

export const sfactor = (f: (a: number) => void) => {
  if (!browser)
    return

  let stop = false
  const g = () => {
    if (stop)
      return
    setTimeout(() => {
      f(scrollY / innerHeight || 0)
      stop = false
    }, 100)
    stop = true
  }

  useEventListener(window, 'scroll', g)
  useEventListener(window, 'resize', g)
}

export const clickout = (node: Element, { f = (_?: Event) => { } }) => {
  if (!browser)
    return

  const g = (e: Event) => {
    if (node && !node.contains(e.target as Node | null) && !e.defaultPrevented)
      f(e)
  }

  useEventListener(document.body, 'click', g)
}

export const fadeonly = () => new MediaQuery('(hover: none), (prefers-reduced-motion: reduce)')

export const redmote = () => new MediaQuery('(prefers-reduced-motion: reduce)')

export const artalt = (name: string) => `Artwork: "${name}" by BandidoJim.`
