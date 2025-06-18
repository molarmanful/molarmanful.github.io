import type { Action } from 'svelte/action'

let loader = $state<IntersectionObserver>()

export const vload: Action = node => {
  if (!loader) {
    loader = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const video = entry.target as HTMLVideoElement
          video.autoplay = true
          video.load()
          loader?.unobserve(video)
        }
      }
    })
  }

  loader.observe(node)
}
