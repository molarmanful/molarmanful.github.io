import { readable } from 'svelte/store'
import { tabbable } from 'tabbable'

import { colors } from './static'

import { browser } from '$app/environment'

export const sfactor = () => {
  if (!browser) return

  let f = () => scrollY / innerHeight
  return readable(f(), set => {
    let g = () => set(f())
    addEventListener('scroll', g)
    addEventListener('resize', g)

    return () => {
      removeEventListener('scroll', g)
      removeEventListener('resize', g)
    }
  })
}

let mqwrap = q => {
  if (!browser) return

  let mql = matchMedia(q)
  let f = () => mql.matches
  return readable(f(), set => {
    let g = () => set(f())
    mql.addEventListener('change', g)

    return () => {
      mql.removeEventListener('change', g)
    }
  })
}

export const fadeonly = () =>
  mqwrap('(hover: none), (prefers-reduced-motion: reduce)')

export const redmote = () => mqwrap('(prefers-reduced-motion: reduce)')

export const rcolor = (
  _,
  {
    b = 700,
    c = '',
    rc = x => 0 | (Math.random() * x.length),
    rt = () => 0 | (Math.random() * 3000 + 1000),
    f = () => {},
    d = 0,
  }
) => {
  let t = 0
  f(c, t)

  let to
  let loop = () => {
    t = rt()
    f(colors[b][rc(colors[b])], t)
    to = setTimeout(loop, t)
  }

  to = setTimeout(loop, d)

  return {
    destroy() {
      clearTimeout(to)
    },
  }
}

export const ccolor = (_, { pulse = 2000, len = 4, f = () => {} }) => {
  let ic = 0
  let i = len - 1
  let clrs = [...Array(len)].map(() => 'text-gray-500')
  f({ clrs, len, pulse })

  let iv = setInterval(() => {
    if (i == len - 1) ic = (ic + 1) % colors[500].length
    clrs[i] = colors[500][ic]
    f(clrs)
    i = (i + 1) % len
  }, pulse / len)

  return {
    destroy() {
      clearInterval(iv)
    },
  }
}

export const lazy = (node, { D }) => {
  node.classList.add('lazy')
  D.lazy.update()
}

export const gridData = (node, { f = () => {} }) => {
  let g = () => {
    let styles = getComputedStyle(node)
    let p = v =>
      styles.getPropertyValue(v).split` `.filter(x => x != '0px').length
    f({
      length: node.childElementCount,
      rows: p('grid-template-rows'),
      cols: p('grid-template-columns'),
    })
  }

  g()
  addEventListener('resize', g)

  return {
    destroy() {
      removeEventListener('resize', g)
    },
  }
}

export const tabs = (node, { f = () => {} }) => {
  f(tabbable(node))
}
