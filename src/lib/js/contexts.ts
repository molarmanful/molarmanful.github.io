import { getContext, setContext } from 'svelte'

interface Context<T> {
  get: () => T
  set: (v: T) => void
}

const context = <T>(s: string): Context<T> => {
  const k = Symbol(s)
  return {
    get: () => getContext(k),
    set: v => setContext(k, v),
  }
}

export const cD = context<DContext>('D')
export const cfocus = context<{ x?: HTMLElement }>('focus')
export const cscroll = context<{ x?: HTMLElement }>('scroll')
