import { MediaQuery, useEventListener } from 'runed'

import { browser } from '$app/environment'

export { default as FocusTrap } from './FocusTrap.svelte'

export const sfactor = f => {
  if (!browser) return

  const g = () => f(scrollY / innerHeight || 0)
  useEventListener(window, 'scroll', g)
  useEventListener(window, 'resize', g)
}

export const clickout = (node, { f = () => {} }) => {
  if (!browser) return

  useEventListener(
    document,
    'click',
    e => {
      if (node && !node.contains(e.target) && !e.defaultPrevented) f(e)
    },
    true
  )
}

export const fadeonly = () =>
  browser && new MediaQuery('(hover: none), (prefers-reduced-motion: reduce)')

export const redmote = () =>
  browser && new MediaQuery('(prefers-reduced-motion: reduce)')

export const artalt = name => `Artwork: "${name}" by BandidoJim.`
