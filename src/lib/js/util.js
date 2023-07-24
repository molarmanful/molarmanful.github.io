export const clickout = node => {
  let f = e => {
    if (!node.contains(e.target))
      node.dispatchEvent(new CustomEvent('clickout'))
  }
  addEventListener('click', f, true)

  return {
    destroy() {
      removeEventListener('click', f, true)
    },
  }
}

export const offtop = (node, { update }) => {
  let ro = new ResizeObserver(() => {
    update(node.offsetTop)
  })
  ro.observe(node)

  return {
    destroy() {
      ro.disconnect()
    },
  }
}

let c = {
  weights: [500],
  colors: 'rose red orange amber yellow lime green emerald teal cyan sky blue indigo violet purple fuchsia pink'
    .split` `,
}
export const colors = Object.fromEntries(
  c.weights.map(w => [w, c.colors.map(c => `text-${c}-${w}`)])
)
export const allColors = c.weights.flatMap(w =>
  c.colors.map(c => `text-${c}-${w}`)
)
