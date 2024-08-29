import { colors as unoColors } from '@unocss/preset-uno/colors'

const shades = [
  'rose',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
] satisfies (keyof typeof unoColors)[]

const weights = [500, 700] satisfies (keyof typeof unoColors.rose)[]

export const colors = Object.fromEntries(
  weights.map(w => [w, shades.map(c => `text-${c}-${w}`)]),
)

export const allColors = weights.flatMap(w =>
  shades.map(c => `text-${c}-${w}`),
)

export const hexes = Object.fromEntries(
  weights.map(w => [w, shades.map(c => unoColors[c][w])]),
)
