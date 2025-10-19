import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'

export default {
  plugins: [
    imagetools(),
    tailwindcss(),
    sveltekit(),
  ],
}
