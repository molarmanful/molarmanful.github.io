import { MediaQuery, useEventListener, useResizeObserver } from 'runed'

import { browser } from '$app/environment'

export { default as FocusTrap } from './FocusTrap.svelte'

export const sfactor = f => {
  if (!browser) return

  const g = () => f(scrollY / innerHeight || 0)
  useEventListener(window, 'scroll', g)
  useEventListener(window, 'resize', g)
}

export const offtop = (x, f) =>
  useResizeObserver(x, entries => f(entries[0]?.target.offsetTop))

export const clickout = (x, handle = () => {}) => {
  if (!browser) return

  const el = $derived(x())
  useEventListener(
    document,
    'click',
    e => {
      if (el && !el.contains(e.target) && !e.defaultPrevented) handle()
    },
    true
  )
}

export const fadeonly = () =>
  browser && new MediaQuery('(hover: none), (prefers-reduced-motion: reduce)')

export const redmote = () =>
  browser && new MediaQuery('(prefers-reduced-motion: reduce)')

export const artalt = name => `Artwork: "${name}" by BandidoJim.`
