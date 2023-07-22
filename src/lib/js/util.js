export function clickout(node) {
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

export function offtop(node, { update }) {
  let ro = new ResizeObserver(_ => {
    update(node.offsetTop)
  })
  ro.observe(node)

  return {
    destroy() {
      ro.disconnect()
    },
  }
}
