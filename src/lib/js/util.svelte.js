import { MediaQuery, useEventListener } from 'runed'

import { browser } from '$app/environment'

export { default as FocusTrap } from './FocusTrap.svelte'

export function sfactor(f) {
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

export function clickout(node, { f = () => {} }) {
  if (!browser)
    return

  const g = (e) => {
    if (node && !node.contains(e.target) && !e.defaultPrevented)
      f(e)
  }

  useEventListener(document.body, 'click', g)
}

export function fadeonly() {
  return browser && new MediaQuery('(hover: none), (prefers-reduced-motion: reduce)')
}

export function redmote() {
  return browser && new MediaQuery('(prefers-reduced-motion: reduce)')
}

export const artalt = name => `Artwork: "${name}" by BandidoJim.`
