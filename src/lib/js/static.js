let c = {
  weights: [500, 700],
  colors: 'rose red orange amber yellow lime green emerald teal cyan sky blue indigo violet purple fuchsia pink'
    .split` `,
}

export const colors = Object.fromEntries(
  c.weights.map(w => [w, c.colors.map(c => `text-${c}-${w}`)])
)

export const allColors = c.weights.flatMap(w =>
  c.colors.map(c => `text-${c}-${w}`)
)
