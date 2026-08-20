import type { Attachment } from 'svelte/attachments'

const loader: { obs?: IntersectionObserver } = {}

export const vload: Attachment = node => {
  if (!loader.obs) {
    loader.obs = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const video = entry.target as HTMLVideoElement
        video.autoplay = true
        video.load()
        loader.obs?.unobserve(video)
      }
    })
  }

  loader.obs.observe(node)
}
