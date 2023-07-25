import { readable } from 'svelte/store'

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

export const rcolor = (
  _,
  {
    b = 500,
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
