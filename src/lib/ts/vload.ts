import type { Attachment } from 'svelte/attachments'

let loader: IntersectionObserver | undefined

export const vload: Attachment = node => {
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
