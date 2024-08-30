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
] as const satisfies (keyof typeof unoColors)[]

const weights = [500, 700] as const satisfies (keyof typeof unoColors.rose)[]
type Weight = keyof typeof weights

export const colors = Object.fromEntries(
  weights.map(w => [w, shades.map(c => `text-${c}-${w}`)]),
) as Record<Weight, string[]>

export const allColors = weights.flatMap(w =>
  shades.map(c => `text-${c}-${w}`),
)

export const hexes = Object.fromEntries(
  weights.map(w => [w, shades.map(c => unoColors[c][w])]),
) as Record<Weight, string[]>
